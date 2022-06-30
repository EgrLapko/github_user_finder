import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "hooks/redux";
import { getUsers } from "store/reducers/usersReducer/usersActions";
import UsersList from "./UsersList";

const UsersListContainer = () => {
  const dispatch = useDispatch();

  const { users, isLoading } = useAppSelector((state) => state.usersReducer);

  const handleGetUsers = useCallback(
    (value: string) => dispatch(getUsers(value)),
    [dispatch]
  );

  return (
    <UsersList
      isLoading={isLoading}
      onGetUsers={handleGetUsers}
      users={users}
    />
  );
};

export default UsersListContainer;
