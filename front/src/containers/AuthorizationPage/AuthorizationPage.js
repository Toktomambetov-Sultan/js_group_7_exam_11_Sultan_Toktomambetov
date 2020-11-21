import React, { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { authorization } from "../../store/user/userActions";
import { Box } from "@material-ui/core";

const AuthorizationPage = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const authorizationHandler = (data) => dispatch(authorization(data));
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });
  const onChange = (event) => {
    const { value, name } = event.target;
    setCurrentUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    authorizationHandler(currentUser);
    setCurrentUser((prevState) => ({
      ...prevState,
      password: "",
    }));
  };
  return (
    <Box pt={10}>
      <UserForm
        title="Sing in"
        icon={<LockOutlinedIcon />}
        error={state.authorizationError?.error}
        user={currentUser}
        color="red"
        onChange={onChange}
        onSubmit={onSubmit}
        hide={true}
      />
    </Box>
  );
};

export default AuthorizationPage;
