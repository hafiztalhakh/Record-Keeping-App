import { Container, Box, createTheme, ThemeProvider } from "@mui/material";
import Routes from "../routes";
import Header from "../views/components/Header";

function Layout() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "'Comfortaa', cursive",
      h1: {
        fontFamily: "'Dancing Script', cursive",
      },
      body1: {
        fontFamily: "'Comfortaa', cursive",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ minHeight: "100vh" }}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Header />
        <Container maxWidth="sm">
          <Routes />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
