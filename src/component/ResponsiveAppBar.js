// import React from 'react';
import * as React from 'react';
// import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@mui/material/MenuItem';

const pages = ['Learn', 'Quiz'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const useStyles = makeStyles({
  navbar:{
    backgroundColor:'#6305dc',
    justifyContent:'space-between',
    marginBottom: 80
  },
  homeColor:{
    fontFamily: 'Dancing Script',
  }
})
const classes = useStyles();

    return(
        <AppBar
        position="sticky"
        style ={{backgroundColor:'#6305dc',
        justifyContent:'space-between',
        }}
         >
        
      
        <Toolbar 
        style={{display:'flex', justifyContent:"flex-end", width:'100%'} 
      } 
       >
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{
              fontFamily: 'Dancing Script',
            }}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          ><Link href='/' underline="none"  style={{color:'white'}}>
          EarthWonders
          </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Link
               href={page} underline="none" textAlign="center">{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            style={{
              fontFamily: 'Dancing Script',
              paddingRight:200
            }}
            sx={{ flexGrow: 3, display: { xs: 'flex', md: 'none' }, }}
          ><Link href='/' underline="none"  style={{color:'white', }}>
            EarthWonders
            </Link>
          </Typography>
         

            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', flexGrow: 1, display: { xs: 'none', md: 'flex',} }}
              >
                <Grid  justifyContent="flex-end">
                <Button><Link href={page} underline="none"  style={{color:'white'}}>
                {page}</Link></Button></Grid>
              </Button>
            ))}
         

          
         
        </Toolbar>
        
    </AppBar>
  );
};
export default ResponsiveAppBar;
