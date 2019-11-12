import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'gatsby-link'

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    
    primary:{
      light: '#002884',
      main: '#333',
      dark: '#002884',
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
