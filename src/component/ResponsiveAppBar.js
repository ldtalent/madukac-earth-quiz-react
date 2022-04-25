import {AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link,
MenuItem,} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const linkDetails = [
  {
    displayName: "Quiz",
    href: "/Quiz",
  },
  {
    displayName: "Learn",
    href: "/Learn",
  },
];

const useStyles = makeStyles(() => ({
  NavBar: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "5px",
    marginBottom:"100px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
      
    },
  },
  logoText: {
    fontFamily: "Dancing Script, cursive",
    fontWeight: 500,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function ResponsiveAppBar() {
  const { NavBar, logoText, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const desktopView = () => {
    return (
      <Toolbar className={toolbar}>
        {EarthWonders}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const viewMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{EarthWonders}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return linkDetails.map(({ displayName, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: displayName,
          }}
        >
          <MenuItem>{displayName}</MenuItem>
        </Link>
      );
    });
  };

  const EarthWonders = (
    <Typography variant="h6" component="h1" className={logoText}>
      EarthWonders
    </Typography>
  );

  const getMenuButtons = () => {
    return linkDetails.map(({ displayName, href }) => {
      return (
        <Button
          {...{
            key: displayName,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {displayName}
        </Button>
      );
    });
  };

  return (
    <NavBar>
      <AppBar className={NavBar}>
        {mobileView ? viewMobile() : desktopView()}
      </AppBar>
    </NavBar>
  );
}