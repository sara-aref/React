import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Buttons from "../reuableComponent/Buttons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../store/slices/contacts";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Register = () => {
  const dispatch = useDispatch();

  const btn = "Register";
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [userForm, setUserForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [userFormErr, setUserFormErr] = useState({
    userName: null,
    email: null,
    password: null,
    confirmPassword: null,
    image: null,
  });

  const handleInput = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserForm({
          ...userForm,
          userName: e.target.value,
        });
        setUserFormErr({
          ...userFormErr,
          userName:
            e.target.value.length === 0
              ? "UserName is required"
              : /\s/.test(e.target.value)
              ? "UserName can't contain spaces"
              : null,
        });
        break;
      case "email":
        setUserForm({
          ...userForm,
          email: e.target.value,
        });
        setUserFormErr({
          ...userFormErr,
          email:
            e.target.value.length === 0
              ? "Email is required"
              : !emailPattern.test(e.target.value)
              ? "Email should be in email format"
              : null,
        });
        break;
      case "password":
        setUserForm({
          ...userForm,
          password: e.target.value,
        });
        setUserFormErr({
          ...userFormErr,
          password:
            e.target.value.length === 0
              ? "Password is required"
              : e.target.value.length > 12
              ? "Password max length is 12 characters"
              : e.target.value.length < 8
              ? "Password should be at least 8 characters"
              : null,
        });
        break;
      case "confirmPassword":
        setUserForm({
          ...userForm,
          confirmPassword: e.target.value,
        });
        setUserFormErr({
          ...userFormErr,
          confirmPassword:
            e.target.value.length === 0
              ? "Confirm password is required"
              : e.target.value !== userForm.password
              ? "Confirm password should match the password"
              : null,
        });
        break;
      case "image":
        setUserForm({
          ...userForm,
          image: e.target.value,
        });
        setUserFormErr({
          ...userFormErr,
          image: e.target.value.length === 0 ? "Image is required" : null,
        });
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(userFormErr).some(
      (error) => error !== null
    );

    if (hasErrors) {
      console.log("Form submission prevented due to errors");
      return;
    }

    console.log("Form submitted successfully:", userForm);
    dispatch(addUserInfo(userForm));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#109f17" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  value={userForm.userName}
                  onChange={handleInput}
                  autoFocus
                />
                {userFormErr.userName && <small>{userFormErr.userName}</small>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userForm.email}
                  onChange={handleInput}
                  autoComplete="email"
                />
                {userFormErr.email && <small>{userFormErr.email}</small>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  value={userForm.password}
                  onChange={handleInput}
                  autoComplete="new-password"
                />
                {userFormErr.password && <small>{userFormErr.password}</small>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={userForm.confirmPassword}
                  onChange={handleInput}
                  autoComplete="new-password"
                />
                {userFormErr.confirmPassword && (
                  <small>{userFormErr.confirmPassword}</small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="file"
                  id="image"
                  name="image"
                  value={userForm.image}
                  onChange={handleInput}
                  autoComplete="image"
                />
                {userFormErr.image && <small>{userFormErr.image}</small>}
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", mt: 3, mb: 2 }}>
              <Buttons btn={btn} />
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Register;
