import React, { useState } from "react";
import { Box, InputLabel, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { database } from "../../config/firebase";
import MiddleContainer from "../containers/MiddleContainer";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function Signup() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = () => {
    const auth = getAuth();
    const collectionRef = collection(database, "Users");
    const { name, email, password, confirmPassword } = state;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          console.log(res);
          try {
            await addDoc(collectionRef, {
              userId: res?.user?.uid,
              name,
              email,
            });
            alert("Success");
          } catch (error) {
            console.log("Error: ", error);
          }
        })
        .catch((err) => {
          alert(err?.message);
        });
    } else {
      alert("Password does not match");
    }
  };

  return (
    <MiddleContainer>
      <h1>Create Account</h1>
      <Box mt={2}>
        <InputLabel>Name:</InputLabel>
        <TextField
          placeholder="Enter your Name"
          value={state?.name}
          onChange={(name) => setState({ ...state, name })}
        />
      </Box>
      <Box mt={2}>
        <InputLabel>Email Address:</InputLabel>
        <TextField
          type="email"
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
      <Box mt={2}>
        <InputLabel>Confirm Password:</InputLabel>
        <TextField
          type="password"
          placeholder="Confirm  your Password"
          value={state?.confirmPassword}
          onChange={(confirmPassword) =>
            setState({ ...state, confirmPassword })
          }
        />
      </Box>
      <Box mt={5}>
        <Button loading={false} onClick={handleSignup}>
          Register
        </Button>
      </Box>
      <Box mt={3} sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#706e6e" }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </MiddleContainer>
  );
}
