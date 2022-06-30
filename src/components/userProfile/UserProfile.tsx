import React from "react";
import Image from "next/image";
import { format } from "date-fns";

import { routes } from "utils/routing";
import { UserType } from "store/reducers/userReducer/userSlice";

import LinkComponent from "components/common/LinkComponent";
import UserProfileReposContainer from "./UserProfileReposContainer";

interface UserProfileProps {
  user: UserType;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile-container">
      <div className="item">
        <LinkComponent {...routes.home()}>
          <h2>GitHub Searcher</h2>
        </LinkComponent>
      </div>
      <div className="user-card-container item">
        <div className="item">
          <Image
            style={{ borderRadius: 8 }}
            height={100}
            width={100}
            src={user.avatar_url}
          />
        </div>
        <div className="user-info-container item">
          <p className="item">
            Username: <span>{user.login}</span>{" "}
          </p>
          {user.email && (
            <p className="item">
              Email:<span> {user.email}</span>
            </p>
          )}
          {user.location && (
            <p className="item">
              Location: <span>{user.location}</span>
            </p>
          )}
          <p className="item">
            Joined:{" "}
            <span>{format(new Date(user.created_at), "MMMM, dd, yyyy")}</span>
          </p>
          <p className="item">
            Followers: <span>{user.followers}</span>
          </p>
          <p className="item">
            Following: <span>{user.following}</span>
          </p>
        </div>
      </div>
      {user.bio && <h2>{user.bio}</h2>}
      <UserProfileReposContainer username={user.login} />
    </div>
  );
};

export default UserProfile;
