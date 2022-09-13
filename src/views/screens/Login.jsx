import { Box, InputLabel, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MiddleContainer from "../containers/MiddleContainer";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function Login() {
  return (
    <MiddleContainer>
      <h1>Login</h1>
      <Box mt={2}>
        <InputLabel>Email Address:</InputLabel>
        <TextField placeholder="Enter your Email Address" />
      </Box>
      <Box mt={2}>
        <InputLabel>Password:</InputLabel>
        <TextField type="password" placeholder="Enter your Password" />
      </Box>
      <Box mt={1} sx={{ textAlign: "right" }}>
        <Link to="/recover-password">Forget Password</Link>
      </Box>
      <Box mt={5}>
        <Button loading={false}>Login</Button>
      </Box>
      <Box mt={3} sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#706e6e" }}>Dont have an account?</Typography>
        <Link to="/create-account">Create Account</Link>
      </Box>
    </MiddleContainer>
  );
}
