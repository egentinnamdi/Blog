import { Box, Typography } from "@mui/material";
import PostContainer from "./PostContainer";
import Navbar from "./Navbar";
import PostListContainer from "./PostListContainer";
import Footer from "./Footer";
import { memo, useRef } from "react";
const ListContainer = memo(PostListContainer);
function Home() {
  const scroll = useRef(null);
  return (
    <Box className="  space-y-4" component="div">
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
      <ListContainer scroll={scroll} />
      <Footer scroll={scroll} />
    </Box>
  );
}

export default Home;
