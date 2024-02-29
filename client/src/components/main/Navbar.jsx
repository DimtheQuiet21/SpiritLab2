import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import AuthModal from "../main/AuthModal";
import Auth from "../../utils/auth";

import AppBar from '@mui/material/AppBar';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function Navbar() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleAuthModalOpen = () => {
    setAuthModalOpen(true);
  };

  const handleAuthModalClose = () => {
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    Auth.logout();
  };

  return (
  <>
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', alignContent: 'center', height: '80px'}}>
          <Container
            disableGutters
            component={RouterLink}
            to="/"
            sx={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}
          >
            <Box
              component="img"
              sx={{
              m: 0,
              maxHeight: { xs: 40, md: 60 },
              maxWidth: { xs: 175, md: 275 },
              }}
              alt="Spirit Labs Logo"
              src="../spiritlabs-full-color.svg"
            />

            <Box>
              {Auth.loggedIn() ? (
                <>
                  <Typography variant="body1" color="inherit">
                    Welcome {Auth.getProfile().data.userName}
                    {/* Won't stay, will be used for testing display of username to page */}
                  </Typography>
                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    // sx={{ marginLeft: "10px", backgroundColor: "#29b0ff" }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleAuthModalOpen}
                    variant="contained"
                    // sx={{ backgroundColor: "#29b0ff" }}
                  >
                    Log In
                  </Button>
                </>
              )}
            </Box>

          </Container>

          
        </Toolbar>
      </Container>
    </AppBar>

    <AuthModal open={authModalOpen} onClose={handleAuthModalClose} />

  </>
  );
}

export default Navbar;
