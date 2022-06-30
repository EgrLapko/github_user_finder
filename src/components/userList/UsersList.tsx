import React, { useState, useEffect } from "react";

import FormInput from "components/common/FormInput";
import UserCardContainer from "./UserCardContainer";
import Spinner from "../common/Spinner";

interface UsersListProps {
  users: any[];
  isLoading: boolean;
  onGetUsers: (value: string) => void;
}

const UsersList: React.FC<UsersListProps> = ({
  users,
  isLoading,
  onGetUsers,
}) => {
  const [value, setValue] = useState(" ");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    let timeout: any;
    if (value?.length > 1) {
      timeout = setTimeout(() => {
        onGetUsers(value);
      }, 300);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [value, onGetUsers]);

  return (
    <div className="users-list-container">
      <div className="item">
        <h2>GitHub Searcher</h2>
      </div>
      <div className="item">
        <FormInput
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Search for Users"
        />
      </div>
      {users.length > 0 && (
        <div className="item" style={{ width: "100%" }}>
          {users.map((user) => {
            return <UserCardContainer key={user.id} user={user} />;
          })}
        </div>
      )}
      {isLoading && (
        <div className="item">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default UsersList;
