import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

import { Outlet } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Search from './pages/Search';
import Footer from './components/main/Footer';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Nav from './components/Nav';
// import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // </StoreProvider> Put this in later to return STATE functionality.

  return (

    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <div className="fixed-navbar">  */} {/* fixed nav bar if we want it*/}
          <Navbar />
<<<<<<< Updated upstream
        {/* </div> */}
          <Container maxWidth='xl'>
            <Search />
=======
          <Container maxWidth='lg'>
>>>>>>> Stashed changes
            <Outlet />
           </Container>
          <Footer />
         </ThemeProvider>
    </ApolloProvider>
  );

}

export default App