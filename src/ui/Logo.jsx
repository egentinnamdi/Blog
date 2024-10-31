import { Typography } from "@mui/material";

function Logo() {
  return (
    <Typography
      variant="h2"
      component="h2"
      className="!font-extrabold"
      sx={{
        fontSize: {
          xs: "2rem",
          lg: "3.7rem",
        },
      }}
    >
      Flex<span className="font-thin text-secondary">Digest</span>
    </Typography>
  );
}

export default Logo;
