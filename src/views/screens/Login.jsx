import { Box, InputLabel, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Box>
        <InputLabel>Username:</InputLabel>
        <TextField placeholder="Enter your Username" />
      </Box>
      <Box>
        <InputLabel>Password:</InputLabel>
        <TextField type="password" placeholder="Enter your Password" />
      </Box>
      <Box mt={1} sx={{ textAlign: "right" }}>
        <Link to="/recover-password">Forget Password</Link>
      </Box>
      <Box mt={2} sx={{ textAlign: "center" }}>
        <Button loading={false}>Login</Button>
      </Box>
      <Box mt={5} sx={{ textAlign: "center" }}>
        <Typography sx={{ mb: 2, color: "#706e6e" }}>
          Dont have an account?
        </Typography>
        <Link to="/create-account">Create Account</Link>
      </Box>
    </div>
  );
}
