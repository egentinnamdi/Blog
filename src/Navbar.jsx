import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Logo from "./ui/Logo";

function Navbar() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen((prev) => !prev);
  }
  function handleClose() {
    setOpen((prev) => !prev);
  }
  return (
    <Box className="w-full">
      <AppBar position="static" sx={{ background: "inherit" }}>
        <Toolbar
          className="p-5"
          sx={{
            background: "inherit",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Box>
            <IconButton
              className="text-4xl"
              size="large"
              color="inherit"
              onClick={handleOpen}
            >
              <Menu />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={open}
              onClose={handleClose}
              className=""
            >
              <List className="bg-primary h-full text-white w-64 space-y-5 uppercase">
                <ListItem button>
                  <ListItemText primary="Item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 2" />
                </ListItem>
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
