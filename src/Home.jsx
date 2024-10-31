import { Box, Typography } from "@mui/material";
import PostContainer from "./PostContainer";
import Navbar from "./Navbar";
import PostListContainer from "./PostListContainer";
import Footer from "./Footer";
import { memo } from "react";
const ListContainer = memo(PostListContainer);
function Home() {
  return (
    <Box className="border border-white  space-y-4" component="div">
      <Navbar />
      <Box className=" flex items-end justify-center w-full border-y border-white">
        <Typography
          className="uppercase "
          component="h1"
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: {
              md: "5rem",
            },
          }}
        >
          the blog
        </Typography>
      </Box>
      <PostContainer />
      <ListContainer />
      <Footer />
    </Box>
  );
}

export default Home;
