import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useState } from "react";
import { navItem } from "src/config/const";
import CloseIcon from "@mui/icons-material/Close";
import AdjustIcon from "@mui/icons-material/Adjust";

interface Props {
  window?: () => Window;
}

const drawerWidth = 100;

const Navbar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
        }}
      >
        <Box sx={{ my: 2, display: "flex", alignItems: "center", gap: "5px" }}>
          <AdjustIcon />
          <Typography variant="h6">Sammi</Typography>
        </Box>
        <CloseIcon />
      </Box>
      <Divider />
      <List>
        {navItem.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box height={"10vh"} sx={{ display: "flex" }}>
      <AppBar sx={{ height: "10vh" }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              my: 2,
              alignItems: "center",
              gap: "5px",
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
            }}
          >
            <AdjustIcon />
            <Typography variant="h6" component="div">
              Sammi
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItem.map((item) => (
              <Button key={item.route} sx={{ color: "#fff" }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
