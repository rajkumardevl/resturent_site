import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import Drawer from "@mui/material/Drawer";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //  Menu Click

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // menu Drawer
  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant={"h6"}
        component={"div"}
        sx={{ flexGrow: 1 }}
      >
        <FastfoodIcon /> My Resturent
      </Typography>
      <Divider />
      {/* text center  */}
      <ul className="Mobile-navigation">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar
          position={"static"}
          component={"nav"}
          sx={{ bgcolor: "#212529" }}
        >
          <Toolbar>
            <IconButton
              sx={{ display: { sm: "none" } }}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant={"h6"}
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Resturent
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    className="nav-item"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to={"/About"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to={"/Menu"}>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item" to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
