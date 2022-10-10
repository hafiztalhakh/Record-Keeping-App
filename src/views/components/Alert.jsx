import { Alert, AlertTitle } from "@mui/material";

export default function Alert({ title, children }) {
  return (
    <Alert severity={title?.toLowerCase()}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
}
