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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import TagIcon from '@mui/icons-material/Tag';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        path: 'https://github.com/ianbrucebraincue',
        icon: GitHubIcon
    },
    {
        id: crypto.randomUUID(),
        title: 'LinkedIn',  
        path: 'https://www.linkedin.com/in/ian-bruce-306810110/',
        icon: LinkedInIcon
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
        <Container maxWidth="100%"
            sx={{
                pr: '0 !important',
                pl: '0 !important'
            }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 400,
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase'
              }}
            >
              <NavLink to="/">Ian Bruce</NavLink>
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                    pl: '0 !important'
                }}
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
                  <MenuItem 
                  key={page.id} 
                  onClick={handleCloseNavMenu}
                  sx={{
                    textTransform: 'uppercase'
                  }}
                  >
                    <NavLink to={page.path}>{page.title}</NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 400,
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase'
              }}
            >
              <NavLink to="/">Ian Bruce</NavLink>
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
                  <TagIcon sx={{ color: '#ffffff' }} />
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
                  <MenuItem 
                    key={social.id} 
                    onClick={handleCloseUserMenu}
                    sx={{
                        textTransform: 'uppercase'
                    }}
                  >
                    <NavLink 
                        to={social.path}
                        target="_blank"
                        style={() => ({
                            display: 'flex'
                        })}
                    >
                        {<social.icon sx={{ mr: '0.3em' }}/>}
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