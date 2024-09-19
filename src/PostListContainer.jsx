import { Box, Grid, Pagination, Typography } from "@mui/material";
import PostListItem from "./PostListItem";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          // Custom styles for the root element
          "& .Mui-selected": {
            // backgroundColor: "#f50057", // Active page background color
            color: "white", // Active page text color
          },
          "& .MuiPaginationItem-root": {
            fontSize: "1.2rem", // Change font size
            color: "white", // Default color
          },
        },
      },
    },
  },
});

function PostListContainer() {
  const [page, setPage] = useState(1);
  function handlePage() {
    if (page === 5) {
      setPage(1);
    }
    setPage((prev) => prev + 1);
  }
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        className="capitalize px-5"
        sx={{ fontWeight: 500 }}
      >
        all blog posts
      </Typography>
      <Grid container spacing={3}>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </Grid>
      <Box component="div" className="flex justify-center">
        <ThemeProvider theme={theme}>
          <Pagination
            count={5}
            color="secondary"
            size="large"
            shape="rounded"
            page={page}
            onChange={handlePage}
            className="text-white"
          ></Pagination>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default PostListContainer;
