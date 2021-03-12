import React, { useEffect } from 'react';
import SearchInput from './components/forms/SearchInput';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import AppLayout from './layouts/AppLayout';
import UsersList from './components/UsersList';
import PlainButton from './components/PlainButton';
import GITHUB_USERS_QUERY from './graphql/queries/githubUsersQuery';
import { parse, stringify } from 'query-string';
import get from 'lodash.get';
import { USERS_PER_PAGE } from './constants'

function App() {
  const [getUsers, { loading, error, data }] = useLazyQuery(GITHUB_USERS_QUERY);
  const users = get(data, 'search.nodes', []);
  const usersCount = get(data, 'search.userCount', 0);
  const { pathname, search } = useLocation();
  const { query, page } = parse(search);

  const history = useHistory();
    
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: 'onBlur',
    defaultValues: {
      searchUsers: query,
    }
  });
  const onSubmit = ({ searchUsers }) => {
    history.push({
      pathname,
      search: `?query=${searchUsers}`
    });
  };
  const handlePageChange = ({ selected }) => {
    const newSearchParams = {
      query,
      page: selected
    };
    history.push({
      pathname,
      search: `?${stringify(newSearchParams)}`
    });
  };

  const handleResetSearch = () => {
    history.push({
      pathname
    });
    setValue('searchUsers', '');
  };

  const currentPage = page ? +page : 0;
  useEffect(() => {
    console.log()
    if (!!query) {
      getUsers({ variables: { query, after: btoa(`cursor:${currentPage * USERS_PER_PAGE}`) } })
    }
  }, [query, getUsers, currentPage]);
  const renderContent = () => {
    if(get(query, 'length', 0) === 0 && users.length === 0) {
      return null;
    }
    if (loading) {
      return <p>Loading users ...</p>;
    }
    if(error) {
      return <p>Error :(</p>
    }
    if(users.length === 0 && query && query.length > 0) {
      return (
        <div>
          <p>There is no users with such search params - <b>{query}</b></p>
          <PlainButton onClick={handleResetSearch}>Reset Search</PlainButton>
        </div>
      );
    }
    return (
      <UsersList
        users={users}
        usersCount={usersCount}
        pageCount={Math.ceil((usersCount > 1000 ? 999 : usersCount) / USERS_PER_PAGE)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  };
  return (
    <AppLayout> 
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
      <SearchInput
        label="Search for millions of users on github"
        name="searchUsers"
        id="searchUsers"
        error={errors.searchUsers}
        register={register({
          required: 'This is required!',
          minLength: {
            value: 3,
            message: 'You have to put at least 3 characters'
          },
          maxLength: 50,
        })}
      />
      </form>
      {renderContent()}
    </AppLayout>
  );
}

export default App;
