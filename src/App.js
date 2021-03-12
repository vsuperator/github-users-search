import { parse } from "query-string";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import AppLayout from "./layouts/AppLayout";
import GITHUB_USERS_QUERY from "./graphql/queries/githubUsersQuery";
import SearchInput from "./components/forms/SearchInput";
import { USERS_PER_PAGE } from "./constants";
import MainContent from "./components/MainContent";

function App() {
  const [getUsers, { loading, error, data }] = useLazyQuery(GITHUB_USERS_QUERY);

  const { pathname, search } = useLocation();
  const { query, page } = parse(search);

  const currentPage = page ? +page : 0;

  const history = useHistory();

  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
    defaultValues: {
      searchUsers: query,
    },
  });

  const onSubmit = ({ searchUsers }) => {
    history.push({
      pathname,
      search: `?query=${searchUsers}`,
    });
  };

  const handleResetSearch = () => {
    history.push({
      pathname,
    });
    setValue("searchUsers", "");
  };

  useEffect(() => {
    if (!!query) {
      getUsers({
        variables: {
          query,
          after: btoa(`cursor:${currentPage * USERS_PER_PAGE}`),
        },
      });
    }
  }, [query, getUsers, currentPage]);

  return (
    <AppLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          label="Search for millions of users on github"
          name="searchUsers"
          id="searchUsers"
          error={errors.searchUsers}
          register={register({
            required: "This is required!",
            minLength: {
              value: 3,
              message: "You have to put at least 3 characters",
            },
            maxLength: 50,
          })}
        />
      </form>
      <MainContent
        loading={loading}
        error={error}
        data={data}
        currentPage={currentPage}
        onResetSearch={handleResetSearch}
      />
    </AppLayout>
  );
}

export default App;
