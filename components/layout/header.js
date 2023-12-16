"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import logo from "../../public/logo.svg";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMobileList, setOpenMobileList] = useState(false);

  const handleOpenHamburger = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

  return (
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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleOpenHamburger}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <List
                sx={{ px: 3 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClickMobileList}>
                  <ListItemText primary="SKIS" />
                  {openMobileList ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMobileList} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {/* Mapping the mobile submenu */}
                    {skisCategories.map((category) => (
                      <ListItemButton
                        component={Link}
                        key={category.label}
                        href={category.link}
                        sx={{
                          px: 3,
                          pl: 5,
                        }}
                      >
                        <ListItemText primary={category.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
                <ListItemButton component={Link} href="/">
                  <ListItemText primary="BINDINGS" />
                </ListItemButton>
                <ListItemButton component={Link} href="/">
                  <ListItemText primary="POLES" />
                </ListItemButton>
              </List>
            </Menu>
          </Box>

          <Box
            component={Link}
            href="/"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, flexGrow: 1 }}
          >
            <Image src={logo} alt="Main Icon" priority />
          </Box>

          <IconButton size="small" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
