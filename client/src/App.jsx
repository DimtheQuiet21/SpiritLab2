import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


import { Outlet } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Search from './components/main/Search';
import Footer from './components/main/Footer';


function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Search />
        <Container maxWidth='lg'>
          <Outlet />
        </Container>
        <Footer />
    </ThemeProvider>


  )
}

export default App
