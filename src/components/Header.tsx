import { AppBar, Toolbar, Typography, Container, IconButton, Drawer, List } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from './HeaderMenuItem';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };
  return (
    <>
      <Container maxWidth="md" sx={{ pt: 2 }}>
        <AppBar
          position="fixed"
          color="primary"
          elevation={3}
          sx={{
            width: '100%', // fill the centered container
            // background: 'primary'
          }}
        >
          <Toolbar sx={{ display: 'flex' }}>
            <IconButton
              size="large"
              edge="start"
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Carlos Vazquez Baur
            </Typography>
            <IconButton

            >

            </IconButton>

            {/* add buttons / actions here */}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='left'
          open={open}
          onClose={toggleDrawer(false)}
        >
          <List
            component='nav'
            sx={{ width: 250 }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <MenuItem keyType='home' /> 
            <MenuItem keyType='tech' />
            <MenuItem keyType='sing' />
            <MenuItem keyType='ski' />
            <MenuItem keyType='contact' />
          </List>
        </Drawer>
      </Container>
    </>
  );
}