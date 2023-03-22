import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import HataSideBar from './HataSideBar';
import HataFooterBar from './HataFooterBar';
import HataHeaderBar from './HataHeaderBar';
import CarMapper from './CarMapper';

const drawerWidth = 240;

export default function PermanentDrawerRight() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      color="default"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <HataHeaderBar/>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <CarMapper/>
        <Toolbar />
      </Box>
       <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
    <HataFooterBar></HataFooterBar>
    </Toolbar>
  </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#F5F5F5",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <HataSideBar/>
      </Drawer>
    </Box>
  );
}
 {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}