import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import AuthModal from "../main/AuthModal";
import Auth from "../../utils/auth";

import AppBar from '@mui/material/AppBar';
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
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: 'black' }}>
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', height: '80px'}}>
          <Box
            component="img"
            sx={{
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
                  color="inherit"
                  sx={{ marginLeft: "10px", backgroundColor: "#29b0ff" }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleAuthModalOpen}
                  color="inherit"
                  sx={{ backgroundColor: "#29b0ff" }}
                >
                  Log In
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <AuthModal open={authModalOpen} onClose={handleAuthModalClose} />

  </>
  );
}

export default Navbar;
