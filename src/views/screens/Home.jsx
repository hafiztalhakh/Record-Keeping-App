import { Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Stack direction="column" rowGap={2}>
      <Paper
        sx={{ padding: "10px 20px" }}
        onClick={() => {
          navigate("/login");
        }}
      >
        Sign In
      </Paper>
      <Paper sx={{ padding: "10px 20px" }}>Sign Up With Email</Paper>
    </Stack>
  );
}
