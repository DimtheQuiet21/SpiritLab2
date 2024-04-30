import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import GlobalProvider from "./globalProvider.jsx";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const labTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00aef3",
      light: "#52c7f5",
      dark: "#007cbd",
    },
    secondary: {
      main: "#f34500",
      light: "#ff8359",
      dark: "#c02600",
    },
  },
});

// import Nav from './components/Nav';
// import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // </StoreProvider> Put this in later to return STATE functionality.
  const location = useLocation(); // Get the current location
  const showNavbar = location.pathname !== "/search";

  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <ThemeProvider theme={labTheme}>
          <CssBaseline />
          {/* <div className="fixed-navbar">  */}{" "}
           {showNavbar && <Navbar />} {/* For the sake of the explore feature in search page, we're conditionally rendering the navbar to hide visibility on page */}
          <Container maxWidth="xl" sx={{ pt: "24px" }}>
            <Outlet />
          </Container>
          <Footer />
        </ThemeProvider>
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default App;
