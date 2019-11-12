import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'gatsby-link'

import { createMuiTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fade} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';




const theme = createMuiTheme({
  palette: {
    primary:{
       
      main: '#333',
      contrastText: '#fff',
    }
    ,
    secondary: {
      main: '#E0E0E0',
    },
  },
});


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  
  

  
}));

const Menu2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme = {theme}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          
          <Typography color="inherit" variant="h6" className={classes.title} component={Link} to='/'>
            <strong> Pear Impact Project</strong>
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <Button color="secondary" href="/about">
            <strong> About</strong>
          </Button>

          <Button  color="secondary"  href="/services">
            <strong> Services</strong>
          </Button>


          <Button  variant="contained" color="#E0E0E0" href="/blog">
            <strong> Blog</strong>
          </Button>
         
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}
export default Menu2
