import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { green } from '@mui/material/colors';
import Profile from './Profile'; 
import Home from './Home';

export default function Nav() {
  const [activeTab, setActiveTab] = React.useState('home');

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>

      {activeTab === 'profile' && <Profile/>}
      {activeTab === 'home' && <Home/>}
     

     
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} >
        <BottomNavigation  value={activeTab} onChange={handleTabChange}>
          <BottomNavigationAction icon={<HomeIcon sx={{ color: green[500] }} />}  value="home" />
          <BottomNavigationAction icon={<PersonIcon sx={{ color: green[500] }} />}  value="profile" />
        </BottomNavigation>
      </Box>
    </Box>
  );
}



