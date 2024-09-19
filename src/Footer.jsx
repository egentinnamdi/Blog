import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      component="div"
      className="flex justify-center items-center text-xs lg:text-xl capitalize p-6 border border-white"
    >
      &copy; {new Date().getFullYear()} Twitter LinkedIn Email RSS feed Add to
      Feedly
    </Box>
  );
}

export default Footer;
