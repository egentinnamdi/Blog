import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container } from "@mui/material";
import Home from "./Home";

function App() {
  return (
    <Box
      component="div"
      sx={{
        color: "white",
        height: "1005",
      }}
      className="bg-primary text-white min-h-screen"
    >
      <Container
        sx={{ color: "white" }}
        maxWidth="xl"
        component="div"
        className=""
      >
        <Home />
      </Container>
    </Box>
  );
}

export default App;
