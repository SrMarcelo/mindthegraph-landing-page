/* eslint-disable react/prop-types */
import { cloneElement, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from "../../assets/logo_mindthegraph.svg";

const drawerWidth = 240;
const navItems = ["Templates", "Prices", "Blog", "Jobs"];

const Header = () => {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
      sx: {
        backgroundColor: "transparent",
        backgroundImage: trigger
          ? "linear-gradient(to right, #FF9226, #DC1866)"
          : "none",
        transition: "all 0.3s ease-in-out",
        "& .MuiButton-root": {
          textTransform: "none",
          minWidth: "auto",
          "&:hover": {
            transform: "scale(1.1)",
          },
          transition: "all 0.3s ease-in-out",
          fontSize: {
            xs: "0.8rem",
            md: "0.9rem",
            xl: "1rem",
          },
        },
        "& .button-default": {
          backgroundColor: "transparent",
        },
      },
    });
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 2,
        }}
      >
        <img
          src={logo}
          alt="Mind the Graph"
          onClick={() => {
            window.location.href = "https://mindthegraph.com";
          }}
          style={{
            cursor: "pointer",
            filter:
              "brightness(0) saturate(100%) invert(20%) sepia(53%) saturate(5563%) hue-rotate(325deg) brightness(88%) contrast(96%)",
          }}
        />
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#EEEEEE",
                },
                "&:active": {
                  backgroundColor: "#EEEEEE",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            mt: 5,
          }}
        >
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                borderRadius: "50px",
                mx: 6,
                py: 0,
                border: "1px solid #212121",
                "&:hover": {
                  backgroundColor: "#212121",
                  color: "#fff",
                },
                "&:active": {
                  backgroundColor: "#212121",
                  color: "#fff",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                borderRadius: "50px",
                mx: 3,
                my: 1.5,
                py: 0.4,
                px: 2,
                backgroundColor: "#5F29CC",
                color: "#fff",
                border: "1px solid #5F29CC",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#5F29CC",
                },
                "&:active": {
                  backgroundColor: "#fff",
                  color: "#5F29CC",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              <ListItemText primary="Sign up free" />
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll>
        <AppBar component="nav" elevation={0}>
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
                flexGrow: 1,
                display: { sm: "block", xs: "flex" },
                ...(mobileOpen && { display: "none" }),
                justifyContent: { xs: "flex-end" },
                mt: 2,
                mb: 2,
              }}
            >
              <img
                src={logo}
                alt="Mind the Graph"
                onClick={() => {
                  window.location.href = "https://mindthegraph.com";
                }}
                style={{ cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                pt: { sm: 1 },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff", p: 0, px: 0.9 }}
                  className="button-default"
                >
                  {item}
                </Button>
              ))}
              <Button
                sx={{
                  p: 0,
                  color: "#fff",
                  border: "1px solid #fff",
                  borderRadius: "50px",
                  px: 2,
                  py: 0.3,
                  ml: 1,
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#212121",
                  },
                }}
              >
                Login
              </Button>
              <Button
                sx={{
                  p: 0,
                  color: "#fff",
                  backgroundColor: "#7833FF",
                  borderRadius: "50px",
                  px: 2,
                  py: 0.3,
                  ml: { sm: 1, md: 2 },
                  border: "1px solid #7833FF",
                  "&:hover": {
                    backgroundColor: "#FFF",
                    color: "#7833FF",
                    border: "1px solid #FFF",
                  },
                }}
              >
                Sign up free
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
