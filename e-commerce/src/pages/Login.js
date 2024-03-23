import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const contact = useSelector((state) => state.userInfo.userForm);
  if (!contact) {
    return;
  }
  return (
    <div>
      <p>Login</p>
      <div>
        <p>Username: {contact.userName}</p>
        <p>Email: {contact.email}</p>
        <p>Password: {contact.password}</p>
        <p>Image: {contact.image}</p>
      </div>
    </div>
  );
};

export default Login;
