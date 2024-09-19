import { Box, Grid, Paper, Typography } from "@mui/material";

function PostListItem({ date, title, content, img }) {
  return (
    <Grid item lg={4} md={6} xs={12}>
      <Paper elevation={3} className="border border-white ">
        <Box component="div" className="bg-primary text-white space-y-2">
          <img src="/img/post-img5.png" alt="img" className="w-full h-48" />
          <Box component="div" className="px-5 py-3 space-y-1 ">
            <Typography
              className="text-secondary"
              variant="body1"
              component="span"
            >
              Sunday , 1 Jan 2023
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="h4" component="h3">
              Bill Walsh leadership lessons
            </Typography>
            <Typography variant="body1" component="p">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default PostListItem;
