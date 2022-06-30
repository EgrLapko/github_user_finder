import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { getUser } from "store/reducers/userReducer/userActions";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import UserProfile from "components/userProfile/UserProfile";

const UserPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (router.query.userId) {
      dispatch(getUser(router.query.userId));
    }
  }, [dispatch, router.query.userId]);

  return user && <UserProfile user={user} />;
};

export default UserPage;
