"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";

const navItems = ["Home", "About", "Contact"];
const skisCategories = [
  { label: "RACING", link: "/" },
  { label: "ALL MOUNTAIN", link: "/all-mountain-skis" },
  { label: "FREERIDE", link: "/freeride-skis" },
  { label: "FREESTYLE", link: "/freestyle-skis" },
  { label: "JUNIOR", link: "/junior-skis" },
  { label: "TOURING", link: "/touring-skis" },
  { label: "ALL SKIS", link: "/all-skis" },
];

// CSS Styles
const navProductStyle = {
  px: 3,
  color: "white",
  fontWeight: 700,
  fontSize: 15,
  letterSpacing: 1,
  ":hover": {
    color: "#ffed00",
    textDecoration: "solid underline 2px",
  },
};

const navSkisCategoriesStyle = {
  px: 3,
  fontWeight: 700,
  fontSize: 15,
  letterSpacing: 1,
};

export default function HeaderNested() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileList, setOpenMobileList] = useState(false);

  const open = Boolean(anchorEl);

  // 1
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // 2
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMobileList = () => {
    setOpenMobileList(!openMobileList);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSKISClick = (event) => {
    // Prevent closing when SKIS is clicked
    event.stopPropagation();
    handleClickMobileList();
  };

  const handleNavItemClick = () => {
    // Close the "SKIS" dropdown and the drawer when any navigation item is clicked
    setOpenMobileList(false);
    setMobileOpen(false);
  };

  const drawer = (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "black",
          py: 2,
        }}
      >
        <Box
          onClick={handleNavItemClick}
          component={Link}
          href="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Image src={logo} alt="Main Icon" priority />
        </Box>

        <IconButton
          size="small"
          aria-label="search"
          color="inherit"
          sx={{ color: "white" }}
        >
          <SearchIcon />
        </IconButton>
      </Container>

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleSKISClick}>
            <ListItemText primary="SKIS" />
            {openMobileList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openMobileList} timeout="auto" unmountOnExit>
          <ListItem disablePadding>
            <ListItemButton onClick={handleNavItemClick}>
              <ListItemText primary="SKIS-1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleNavItemClick}
              component={Link}
              href="/"
            >
              <ListItemText primary="SKIS-2" />
            </ListItemButton>
          </ListItem>
        </Collapse>

        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={handleNavItemClick}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop view Menu */}

            <Box
              component={Link}
              href="/"
              sx={{ display: { xs: "none", md: "flex" }, mr: 8 }}
            >
              <Image src={logo} alt="Main Icon" priority />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button onClick={handleClick} sx={navProductStyle}>
                Skis
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ width: 500 }}
              >
                {/* Mapping the submenu */}
                {skisCategories.map((category) => (
                  <MenuItem
                    component={Link}
                    key={category.label}
                    href={category.link}
                    onClick={handleClose}
                    sx={navSkisCategoriesStyle}
                  >
                    {category.label}
                  </MenuItem>
                ))}
              </Menu>
              <Button component={Link} href="/bindings" sx={navProductStyle}>
                Bindings
              </Button>
              <Button component={Link} href="/poles" sx={navProductStyle}>
                Poles
              </Button>
            </Box>

            {/* Mobile view Menu */}
            <Container
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box component={Link} href="/" sx={{ display: "flex" }}>
                <Image src={logo} alt="Main Icon" priority />
              </Box>

              <IconButton size="small" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
