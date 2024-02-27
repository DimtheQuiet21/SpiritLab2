import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    accent: '#2196f3',
  },
});

import { Outlet } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';

import GlobalProvider from './globalProvider';


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
      <GlobalProvider>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <div className="fixed-navbar">  */} {/* fixed nav bar if we want it*/}
          <Navbar />
          <Container maxWidth='xl' sx={{pt: "24px"}}>
            <Outlet />
          </Container>
          <Footer />
        </ThemeProvider>
      </GlobalProvider>
    </ApolloProvider>
  );
}


export default App