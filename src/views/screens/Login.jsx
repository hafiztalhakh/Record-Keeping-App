import React, { useState } from "react";
import { Box, InputLabel, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MiddleContainer from "../containers/MiddleContainer";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(state);
  };

  return (
    <MiddleContainer>
      <h1>Login</h1>
      <Box mt={2}>
        <InputLabel>Email Address:</InputLabel>
        <TextField
          placeholder="Enter your Email Address"
          value={state?.email}
          onChange={(email) => setState({ ...state, email })}
        />
      </Box>
      <Box mt={2}>
        <InputLabel>Password:</InputLabel>
        <TextField
          type="password"
          placeholder="Enter your Password"
          value={state?.password}
          onChange={(password) => setState({ ...state, password })}
        />
      </Box>
      <Box mt={1} sx={{ textAlign: "right" }}>
        <Link to="/recover-password">Forget Password</Link>
      </Box>
      <Box mt={5}>
        <Button loading={false} onClick={handleLogin}>
          Login
        </Button>
      </Box>
      <Box mt={3} sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#706e6e" }}>Dont have an account?</Typography>
        <Link to="/create-account">Create Account</Link>
      </Box>
    </MiddleContainer>
  );
}
