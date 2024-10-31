import { Paper, Typography, Box, Stack, Fab } from "@mui/material";
import PostItem from "./PostItem";
import PostReuse from "./PostReuse";
import { ArrowOutwardSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

function PostContainer() {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        className="capitalize pt-5 px-5"
        sx={{ fontWeight: 500 }}
      >
        recent blog posts
      </Typography>

      <Box
        component="div"
        className="lg:grid grid-cols-2 grid-rows-[auto_auto_auto] flex flex-col gap-6 md:min-h-72 py-10 bg-primary"
      >
        <Paper
          elevation={2}
          className="md:row-span-2   border border-white space-y-3"
          sx={{ bgcolor: "inherit" }}
        >
          <Link to="/post/1">
            <img src="/img/Image.png" alt="img" className="w-full" />
            <Box
              className="  bg-inherit text-white capitalize px-5 py-4"
              component="div"
            >
              <Stack spacing={2}>
                <Typography variant="body1" className="text-secondary">
                  sunday, 1 jun 2023
                </Typography>
                <Box component="div" className="flex  justify-between">
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{ fontWeight: 500 }}
                  >
                    ux review presentations
                  </Typography>
                  <Fab
                    color="white"
                    aria-label="go-to"
                    className=""
                    sx={{ marginRight: 5 }}
                  >
                    <ArrowOutwardSharp />
                  </Fab>
                </Box>
                <Typography variant="body1" component="p">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </Typography>
              </Stack>
            </Box>
          </Link>
        </Paper>

        <PostReuse img={2} />
        <PostReuse img={4} />
        <PostItem img={3} />
      </Box>
    </>
  );
}

export default PostContainer;
