import { Box, Container, Typography } from "@mui/material";
import Logo from "../ui/Logo";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { usePosts } from "../context/PostProvider";

function BlogPost() {
  const { blogId } = useParams();
  const data = usePosts();
  //   const blogPost = data[blogId];
  console.log(typeof blogId);
  return (
    <Box className=" space-y-5 border border-white min-h-screen">
      <Navbar />
      <Box className="">
        <img src="/img/Image.png" alt="image" className="h-full w-full" />
      </Box>
      <Box>
        <Typography></Typography>
      </Box>
    </Box>
  );
}

export default BlogPost;
