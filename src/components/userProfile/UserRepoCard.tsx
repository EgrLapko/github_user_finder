import React from "react";
import { RepoType } from "store/reducers/userReposReducer/userReposSlice";

interface UserRepoCardProps {
  repo: RepoType;
}

const UserRepoCard: React.FC<UserRepoCardProps> = ({ repo }) => {
  return (
    <div className="user-repo-card-container">
      <div className="item">
        <h3>{repo.name}</h3>
      </div>
      <div className="item">
        <div>
          <p>{repo.forks_count} Fork(s)</p>
        </div>
        <div>
          <p>{repo.stargazers_count} Start(s)</p>
        </div>
      </div>
    </div>
  );
};

export default UserRepoCard;
