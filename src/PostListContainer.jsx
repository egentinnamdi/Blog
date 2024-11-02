import { Box, Grid, Pagination, Skeleton, Typography } from "@mui/material";
import PostListItem from "./PostListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { usePosts } from "./context/PostProvider";
import { HashLink } from "react-router-hash-link";

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

function PostListContainer({ scroll }) {
  const { data, previous, next, dispatch, page } = usePosts();

  function handlePage(event, pageNum) {
    dispatch({
      type: "updatePage",
      payload: {
        pageNum,
      },
    });
  }
  return (
    <Box className="space-y-10">
      <Typography
        variant="h4"
        component="h2"
        className="capitalize px-5"
        sx={{ fontWeight: 500 }}
      >
        all blog posts
      </Typography>

      <Grid container spacing={3}>
        {data ? (
          data?.map((item, index) => {
            return (
              index >= previous &&
              index <= next && (
                <PostListItem key={item.id} item={item} index={index} />
              )
            );
          })
        ) : (
          <>
            <Grid item lg={4} md={6} xs={12} className="">
              <Skeleton
                variant="rounded"
                width="100%"
                height="100%"
                className="!bg-skeleton"
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12} className="">
              <Skeleton
                variant="rounded"
                width="100%"
                height="100%"
                className="!bg-skeleton"
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12} className="">
              <Skeleton
                variant="rounded"
                width={100}
                height={100}
                className="!bg-skeleton"
              />
            </Grid>
          </>
        )}
      </Grid>
      <Box component="div" className="flex justify-center">
        <ThemeProvider theme={theme}>
          <HashLink smooth to="/#footer">
            <Pagination
              boundaryCount={1}
              count={Math.round(data?.length / 5) || 5}
              color="secondary"
              size="large"
              shape="rounded"
              page={page}
              onChange={handlePage}
              className="text-white"
              onClick={() =>
                scroll.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            ></Pagination>
          </HashLink>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default PostListContainer;
