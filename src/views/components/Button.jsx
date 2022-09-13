import React from "react";
import { LoadingButton } from "@mui/lab";

export default function Button({ onClick, loading, children }) {
  return (
    <LoadingButton
      fullWidth
      loading={loading}
      onClick={onClick}
      variant="contained"
      loadingIndicator="Loading…"
      sx={{
        fontWeight: "bold",
      }}
    >
      {children}
    </LoadingButton>
  );
}
