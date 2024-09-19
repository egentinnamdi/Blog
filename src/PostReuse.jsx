import { Paper, Stack, Typography, Box } from "@mui/material";

function PostReuse({ img }) {
  return (
    <Paper
      elevation={2}
      className="bg-inherit border border-white space-x-2"
      sx={{ bgcolor: "inherit" }}
    >
      <Stack
        spacing={3}
        direction={{ md: "row", xs: "column" }}
        className="h-full"
      >
        <img src={`/img/post-img${img}.png`} alt="img" className=" lg:w-2/4" />
        <Box
          component="div"
          className="text-white flex flex-col justify-center  p-3 lg:w-2/4 "
        >
          <Stack spacing={2}>
            <Typography
              className="text-secondary"
              variant="body1"
              component="span"
            >
              Sunday, 1 Jan 2023
            </Typography>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 500 }}>
              Migrating to Linear 101
            </Typography>
            <Typography variant="body1" component="p" className="text-justify">
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here’s how to get...
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default PostReuse;
