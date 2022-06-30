import React from "react";

import { RepoType } from "store/reducers/userReposReducer/userReposSlice";
import LinkComponent from "components/common/LinkComponent";
import UserRepoCard from "./UserRepoCard";

interface UserProfileReposProps {
  repos: RepoType[];
}

const UserProfileRepos: React.FC<UserProfileReposProps> = ({ repos }) => {
  return repos.length === 0 ? (
    <div>
      <h2>No repos here... how sad</h2>
    </div>
  ) : (
    repos.map((repo) => {
      return (
        <LinkComponent key={repo.id} href={repo.html_url} target="_blank">
          <UserRepoCard repo={repo} />
        </LinkComponent>
      );
    })
  );
};

export default UserProfileRepos;
