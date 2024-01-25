"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import SearchIcon from "@mui/icons-material/Search";

const skisCategories = [
  { label: "RACING", link: "/racing-skis" },
  { label: "ALL MOUNTAIN", link: "/all-mountain-skis" },
  { label: "FREERIDE", link: "/freeride-skis" },
  { label: "FREESTYLE", link: "/freestyle-skis" },
  { label: "TOURING", link: "/touring-skis" },
  { label: "ALL SKIS", link: "/all-skis" },
];

// CSS Styles
const navProductsStyle = {
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

const navDrawerProductsStyle = {
  px: 2,
  fontWeight: 800,
  fontSize: 18,
  letterSpacing: 1,
};

const navDrawerSkisCategoriesStyle = {
  px: 2,
  fontWeight: 700,
  fontSize: 16,
  letterSpacing: 1,
};

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileList, setOpenMobileList] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const formRef = useRef();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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

  const handleSearch = (formData) => {
    const search = formData.get("search");
    formRef.current.reset();
    setIsSearch(false);

    window.location.href = `/products?search=${encodeURIComponent(search)}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the search toolbar
      if (
        isSearch &&
        formRef.current &&
        !formRef.current.contains(event.target)
      ) {
        setIsSearch(false);
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isSearch]);

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
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={handleNavItemClick}
          sx={{
            color: "white",
            ml: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          onClick={handleNavItemClick}
          component={Link}
          href="/"
          sx={{
            display: "flex",
          }}
        >
          <Image src={logo} alt="Main Icon" priority />
        </Box>

        <IconButton
          size="small"
          aria-label="search"
          color="inherit"
          sx={{
            mr: 1,
          }}
        >
          <SearchIcon />
        </IconButton>
      </Container>

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleSKISClick}>
            <ListItemText
              primary="SKIS"
              primaryTypographyProps={navDrawerProductsStyle}
            />
            {openMobileList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Divider />
        <Collapse in={openMobileList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Mapping the mobile submenu */}
            {skisCategories.map((category) => (
              <Box key={category.label}>
                <ListItemButton
                  onClick={handleNavItemClick}
                  component={Link}
                  href={category.link}
                  sx={{
                    px: 3,
                    pl: 5,
                  }}
                >
                  <ListItemText
                    primary={category.label}
                    primaryTypographyProps={navDrawerSkisCategoriesStyle}
                  />
                </ListItemButton>
                <Divider />
              </Box>
            ))}
          </List>
        </Collapse>

        <ListItemButton
          onClick={handleNavItemClick}
          component={Link}
          href="/bindings"
        >
          <ListItemText
            primary="BINDINGS"
            primaryTypographyProps={navDrawerProductsStyle}
          />
        </ListItemButton>
        <Divider />
        <ListItemButton
          onClick={handleNavItemClick}
          component={Link}
          href="/poles"
        >
          <ListItemText
            primary="POLES"
            primaryTypographyProps={navDrawerProductsStyle}
          />
        </ListItemButton>
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", py: 4.5 }}>
      <AppBar
        position="fixed"
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
              <Button onClick={handleClick} sx={navProductsStyle}>
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
              <Button component={Link} href="/bindings" sx={navProductsStyle}>
                Bindings
              </Button>
              <Button component={Link} href="/poles" sx={navProductsStyle}>
                Poles
              </Button>
            </Box>
            <IconButton
              onClick={() => setIsSearch(!isSearch)}
              size="small"
              aria-label="search"
              color="inherit"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <SearchIcon />
            </IconButton>

            {/* Mobile view Menu */}
            <Container
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>

              <Box component={Link} href="/" sx={{ display: "flex" }}>
                <Image src={logo} alt="Main Icon" priority />
              </Box>

              <IconButton
                onClick={() => setIsSearch(!isSearch)}
                size="small"
                aria-label="search"
                color="inherit"
              >
                <SearchIcon />
              </IconButton>
            </Container>
          </Toolbar>
          {isSearch ? (
            <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
              <Paper
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(new FormData(e.target));
                }}
                ref={formRef}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  type="search"
                  name="search"
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton type="submit" sx={{ p: "6px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Toolbar>
          ) : null}
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
