import { Box } from "@mui/material";

function Footer({ scroll }) {
  return (
    <Box
      id="footer"
      ref={scroll}
      component="div"
      className="flex justify-center items-center text-center text-xs lg:text-xl capitalize p-6 "
    >
      &copy; {new Date().getFullYear()} Flex Digest. All Rights Reserved.
    </Box>
  );
}

export default Footer;
