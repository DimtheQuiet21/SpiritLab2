import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, IconButton, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import AuthModal from "../main/AuthModal";
import Auth from "../../utils/auth";

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
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      sx={{
        padding: "10px",
        backgroundColor: "black",
        width: "100%",
        height: "9vh",
        margin: "auto",
        flex: 1,
      }}
    >
      <Grid item>
        <Link to="/" style={{ textDecoration: "none", color: "#29b0ff" }}>
          <h2>SPIRIT LABS</h2>
          {/* This will be changed to the logo */}
        </Link>
      </Grid>

      {/* use this for the search button */}
      <Grid item>
        <IconButton color="inherit">
          <SearchIcon />
          <Link to="/Search" style={{ marginLeft: "10px", color: "#29b0ff" }}>
            Search Drinks
          </Link>
        </IconButton>
      </Grid>

      <AuthModal open={authModalOpen} onClose={handleAuthModalClose} />

      <Grid item>
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
      </Grid>
    </Grid>
  );
}

export default Navbar;
