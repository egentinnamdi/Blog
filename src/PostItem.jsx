import { Paper, Typography, Box, Stack } from "@mui/material";

function PostItem({ date, title, img, content }) {
  return (
    <Paper
      sx={{ bgcolor: "inherit", color: "white" }}
      className="col-span-2 border border-white w-full"
      elevation={2}
    >
      <Stack direction={{ lg: "row", xs: "column" }} spacing={3}>
        <img
          className="lg:w-full xl:w-2/4"
          src={`/img/post-img${img}.png`}
          alt="img3"
        />
        <Box className="justify-center flex flex-col lg:w-full xl:w-2/4 space-y-4 px-5 py-4">
          <Typography variant="body1" className="capitalize text-secondary">
            Sunday , 1 Jan 2023
            {date}
          </Typography>
          <Typography
            className="capitalize "
            variant="h4"
            component="h3"
            sx={{ fontWeight: 500 }}
          >
            Grid system for better Design User Interface
            {title}
          </Typography>
          <Typography variant="body1" className="text-justify">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
            {content}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default PostItem;
