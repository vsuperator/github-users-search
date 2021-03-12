import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parse, stringify } from "query-string";
import { Player } from "@lottiefiles/react-lottie-player";
import get from "lodash.get";
import UsersList from "../UsersList";
import PlainButton from "../PlainButton";
import { USERS_PER_PAGE } from "../../constants";

const MainContent = ({ data, loading, error, currentPage, onResetSearch }) => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const users = get(data, "search.nodes", []);
  const usersCount = get(data, "search.userCount", 0);
  const { query } = parse(search);

  const handlePageChange = ({ selected }) => {
    const newSearchParams = {
      query,
      page: selected,
    };
    history.push({
      pathname,
      search: `?${stringify(newSearchParams)}`,
    });
  };

  if (get(query, "length", 0) === 0 && users.length === 0) {
    return (
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_V3h0cE.json"
        style={{ height: "240px", width: "240px" }}
      />
    );
  }
  if (loading) {
    return (
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/private_files/lf30_ynVx3T.json"
        style={{ height: "580px", width: "800px" }}
      />
    );
  }
  if (error) {
    return (
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/datafiles/HF2l8DiOyOT4dwI/data.json"
        style={{ height: "580px", width: "800px" }}
      />
    );
  }
  if (users.length === 0 && query && query.length > 0) {
    return (
      <div>
        <p>
          There is no users with such search params - <b>{query}</b>
        </p>
        <PlainButton onClick={onResetSearch}>Reset Search</PlainButton>
      </div>
    );
  }
  return (
    <UsersList
      users={users}
      usersCount={usersCount}
      pageCount={Math.ceil(
        (usersCount > 1000 ? 999 : usersCount) / USERS_PER_PAGE
      )}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export default MainContent;
