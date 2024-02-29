
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import Paper from '@mui/material/Paper';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';

function Footer() {

    const [active, setActive] = React.useState(0);

    //Sets active nav icon to current loaded page in case of refresh
    React.useEffect(() => {
        const currentLocation = window.location.pathname;

        switch (currentLocation) {
            case '/':
                setActive(0)
                break;
            case '/lab':
                setActive(1)
                break;
            case '/search':{
                setActive(2)
                break;}
            case '/me':
                setActive(3)
                break;
            default:
                break;
        }
    }, []); // Dependency array

    return (

        <Box sx={{ pb: 7 }}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                showLabels
                sx={{height: '75px', borderTop: 'solid 2px #00aef3'}}
                value={active}
                onChange={(event, value) => {
                setActive(value);
                }}
                >
                    <BottomNavigationAction component={RouterLink} to="/" label="Home" icon={<ScienceIcon />} />
                    <BottomNavigationAction component={RouterLink} to="/lab" label="The Lab" icon={<BiotechIcon />} />
                    <BottomNavigationAction component={RouterLink} to="/search" label="Search" icon={<SearchIcon />} />
                    <BottomNavigationAction component={RouterLink} to="/me" label="Profile" icon={<PersonIcon />} />

                </BottomNavigation>
            </Paper>
        </Box>
    )
  }
  
  export default Footer