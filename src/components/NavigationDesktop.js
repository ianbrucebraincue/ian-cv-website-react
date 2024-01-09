import { useState } from "react";
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = [
    {
        id: crypto.randomUUID(),
        title: 'Projects',
        path: '/projects'
    },
    {   
        id: crypto.randomUUID(),
        title: 'Regarding',
        path: '/about'
    }
];
const socials = [
    {
        id: crypto.randomUUID(),
        title: 'GitHub',
        path: 'https://github.com/ianbrucebraincue'
    },
    {
        id: crypto.randomUUID(),
        title: 'LinkedIn',  
        path: 'https://www.linkedin.com/in/ian-bruce-306810110/'
    }

]

export default function NavigationDesktop () {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElSocials, setAnchorElSocials] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElSocials(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElSocials(null);
    };

    return (
    <AppBar position="static"
        sx={{ 
          bgcolor: "transparent",
          boxShadow: "none" 
        }}
    >
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 400,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Ian Bruce
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
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <NavLink to={page.path}>{page.title}</NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 400,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Ian Bruce
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <NavLink 
                        key={page}
                        to={page.path}
                    >
                        {page.title}
                    </NavLink>
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="View socials">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Ian Bruce" src={require(`../assets/socials-icon-white.png`)} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElSocials}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElSocials)}
                onClose={handleCloseUserMenu}
              >
                {socials.map((social) => (
                  <MenuItem key={social.id} onClick={handleCloseUserMenu}>
                    <NavLink to={social.path}
                    target="_blank">
                        {social.title}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
    </AppBar>
    )
}