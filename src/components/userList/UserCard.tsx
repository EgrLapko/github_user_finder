import Image from "next/image";
import React from "react";

interface UserCardProps {
  user: {
    login: string;
    avatar_url: string;
    repos_url: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card-container">
      <div>
        <Image
          className="user-image"
          height={100}
          width={100}
          src={user?.avatar_url}
        />
      </div>
      <div>
        <p>
          Username: <span>{user.login}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
