import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Home from "./Home";
import { Box, Container } from "@mui/material";
import { PostProvider } from "./context/PostProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <PostProvider>
          <BrowserRouter>
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
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/post/:id" element={<BlogPost />} />
                </Routes>
              </Container>
            </Box>
          </BrowserRouter>
        </PostProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
