import './App.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Search from './components/main/Search';
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
      <div>
          <Navbar />
          <Search />
          <Outlet />
          <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App