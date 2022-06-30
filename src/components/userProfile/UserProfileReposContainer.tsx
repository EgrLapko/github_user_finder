import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "hooks/redux";
import { getUserRepos } from "store/reducers/userReposReducer/userReposActions";
import { RepoType } from "store/reducers/userReposReducer/userReposSlice";

import FormInput from "components/common/FormInput";
import UserProfileRepos from "./UserProfileRepos";
import Spinner from "../common/Spinner";

interface UserProfileReposContainerProps {
  username: string;
}

const UserProfileReposContainer: React.FC<UserProfileReposContainerProps> = ({
  username,
}) => {
  const dispatch = useDispatch();
  const { repos, isLoading } = useAppSelector((state) => state.userRepos);

  const [value, setValue] = useState("");
  const [userRepos, setUserRepos] = useState<RepoType[]>(repos);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getUserRepos(username));
  }, [dispatch, username]);

  useEffect(() => {
    if (value === "") {
      setUserRepos(repos);
    }
  }, [value, repos]);

  useEffect(() => {
    if (value !== "") {
      const filteredRepos = repos?.filter((repo) => {
        return repo.name.toLowerCase().includes(value.toLowerCase());
      });
      return setUserRepos(filteredRepos);
    }
  }, [value, setValue]);

  return (
    <div className="user-profile-repos-container">
      <div>
        <FormInput
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Search repositories"
        />
      </div>
      {repos && !isLoading ? (
        <div>
          <UserProfileRepos repos={userRepos} />
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default UserProfileReposContainer;
