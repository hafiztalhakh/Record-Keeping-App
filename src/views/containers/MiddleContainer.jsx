import { Box, Stack } from "@mui/material";

export default function MiddleContainer({ children }) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "calc(100vh - 65px)" }}
    >
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Stack>
  );
}
