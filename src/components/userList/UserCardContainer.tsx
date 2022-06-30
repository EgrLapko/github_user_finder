import React from "react";

import { routes } from "utils/routing";
import LinkComponent from "components/common/LinkComponent";
import UserCard from "./UserCard";

interface UserCardContainerProps {
  user: {
    login: string;
    avatar_url: string;
    repos_url: string;
  };
}

const UserCardContainer: React.FC<UserCardContainerProps> = ({ user }) => {
  return (
    <LinkComponent {...routes.user(user.login)}>
      <UserCard user={user} />
    </LinkComponent>
  );
};

export default UserCardContainer;
