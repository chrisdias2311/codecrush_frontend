import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import Logo from '../Logo.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { styled, alpha } from '@mui/material/styles';


import { setFruitsButton, setVegetablesButton, setFoodgrainsButton, searchAllProducts, setSearchProducts } from '../redux/actions/actions';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function DrawerAppBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state);

  const navigateToAddProduct = () => {
    navigate('/addproduct')
  }

  const handleSearch = (e) => {
    console.log("Handle Search called")
    setTextSearch(e.target.value)
    dispatch(searchAllProducts(e.target.value))
    setSearch(data.products.searchproducts)
  }

  const searchProducts = () => {
    dispatch(setSearchProducts())
  }

  const [search, setSearch] = useState([]);
  const [textSearch, setTextSearch] = useState('');

  const filterFruits = () => {
    dispatch(setFruitsButton())
  }
  const filterVegetables = () => {
    dispatch(setVegetablesButton())
  }
  const filterFoodGrains = () => {
    dispatch(setFoodgrainsButton())
  }

  const navigateToHome = () => {
    navigate('/')
  }
  const navigateToSignup = () => {
    navigate('/signup')
  }
  const navigateToLogin = () => {
    navigate('/login')
  }
  const navigateToFarmerSignup = () => {
    navigate('/farmersignup')
  }
  const navigateToFarmerLogin = () => {
    navigate('/farmerlogin')
  }
  const navigateToFarmerDashboard = () =>{
    navigate('/farmerboard')
  }


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'flex-start' }}>
      <img
        onClick={navigateToHome}
        style={{ height: '79px' }}
        src={Logo}
      />
      <Divider />
      {
        (localStorage.getItem('user') || localStorage.getItem('farmer')) ?
          (
            localStorage.getItem('user') ?
              <List>
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ListItemText onClick={navigateToHome}>Home</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ListItemText >User Dahboard</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ListItemText onClick={navigateToLogin}>Sign-In as User</ListItemText>
                    <ListItemText onClick={navigateToSignup}>Sign-Up as User</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ListItemText onClick={navigateToFarmerLogin}>Sign-In as Farmer</ListItemText>
                    <ListItemText onClick={navigateToFarmerSignup}>Sign-Up as Farmer</ListItemText>
                  </ListItemButton>
                </ListItem>

                <br></br> <br></br>


                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <h5>Filter by category</h5>
                    <ListItemText onClick={filterFruits}>Fruits</ListItemText>
                    <ListItemText onClick={filterVegetables}>Vegetables</ListItemText>
                    <ListItemText onClick={filterFoodGrains}>FoodGrains</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>

              :

              <List>
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ListItemText onClick={navigateToHome}>Home</ListItemText>
                    <ListItemText onClick={navigateToHome}>Add Product</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ListItemText onClick={navigateToLogin}>Sign-In as User</ListItemText>
                    <ListItemText onClick={navigateToSignup}>Sign-Up as User</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <ListItemText onClick={navigateToFarmerLogin}>Sign-In as Farmer</ListItemText>
                    <ListItemText onClick={navigateToFarmerSignup}>Sign-Up as Farmer</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>
          )
          :
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <ListItemText onClick={navigateToHome}>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />l
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <ListItemText onClick={navigateToLogin}>Sign-In as User</ListItemText>
                <ListItemText onClick={navigateToSignup}>Sign-Up as User</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <ListItemText onClick={navigateToFarmerLogin}>Sign-In as Farmer</ListItemText>
                <ListItemText onClick={navigateToFarmerSignup}>Sign-Up as Farmer</ListItemText>
              </ListItemButton>
            </ListItem>

            <br></br> <br></br>


            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <h5>Filter by category</h5>
                <ListItemText onClick={filterFruits}>Fruits</ListItemText>
                <ListItemText onClick={filterVegetables}>Vegetables</ListItemText>
                <ListItemText onClick={filterFoodGrains}>FoodGrains</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
      }


    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ display: 'flex', backgroundColor: '#242734' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, display: 'flex' }}
          >
            <img
              onClick={navigateToHome}
              style={{ height: '60px' }}
              className="header_logo"
              src={Logo}
            />
          </Typography>

          <Search sx={{ marginLeft: 5, display: 'flex' }}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
            {/* <SearchIconWrapper onClick={searchProducts}>
              <SearchIcon />
            </SearchIconWrapper> */}
          </Search>
          <Button onClick={searchProducts} sx={{ ':hover': { bgcolor: 'black', color: 'white' }, bgcolor: '#155b8a', margin: '10px' }} variant="contained"><SearchIcon /></Button>

          {
                        (localStorage.getItem('user') || localStorage.getItem('farmer')) ?
                            (
                                localStorage.getItem('user') ?
                                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        <Button onClick={navigateToHome} sx={{ color: '#fff' }}>Home</Button>
                                        <Button sx={{ color: '#fff' }}>Dashboard</Button>
                                       
                                    </Box>
                                    :
                                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        <Button sx={{ color: '#fff' }}>Home</Button>
                                        <Button onClick={navigateToAddProduct} sx={{ color: '#fff' }}>Add Product</Button>
                                        <Button onClick={navigateToFarmerDashboard} sx={{ color: '#fff' }}>Dashboard</Button>
                                    </Box>
                            )
                            :
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Button onClick={navigateToHome} sx={{ color: '#fff' }}>Home</Button>
                                <Button onClick={navigateToSignup} sx={{ color: '#fff', paddingRight: 3 }}>Sign-Up as User</Button>
                                <Button onClick={navigateToFarmerSignup} sx={{ color: '#fff' }}>Sign-up as Farmer</Button>
                            </Box>
                    }
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;