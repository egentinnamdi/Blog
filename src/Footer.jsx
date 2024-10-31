import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      component="div"
      className="flex justify-center items-center text-center text-xs lg:text-xl capitalize p-6 border border-white"
    >
      &copy; {new Date().getFullYear()} Flex Digest. All Rights Reserved.
    </Box>
  );
}

export default Footer;
