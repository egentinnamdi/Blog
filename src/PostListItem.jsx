import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { usePosts } from "./context/PostProvider";

function PostListItem({ item, index }) {
  const { previous, next } = usePosts();
  const { title, created_at: date, description, image, id } = item;
  const formattedDate = new Date(date.slice(0, 10)).toDateString();
  console.log(index, previous, next);
  return (
    <Grid item lg={4} md={6} xs={12} className="">
      <Paper
        elevation={15}
        className="border-b border-b-secondary h-full !bg-primary  "
      >
        <Link to={`/post/${id}`}>
          <Box component="div" className=" text-white space-y-2">
            <img
              src="/img/post-img5.png"
              alt="img"
              className="w-full h-48 rounded-t-xl"
            />
            <Box component="div" className="px-5 py-3 space-y-1 ">
              <Typography
                className="text-secondary"
                variant="body1"
                component="span"
              >
                {formattedDate}
              </Typography>
              <Typography sx={{ fontWeight: 500 }} variant="h5" component="h3">
                {title}
              </Typography>
              <Typography variant="body1" component="p">
                {description}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Paper>
    </Grid>
  );
}

export default PostListItem;
