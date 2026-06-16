import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient, InMemoryCache, HttpLink, ApolloProvider, from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import App from './App';
import { AdminProvider } from './context/AdminContext';

// only for testing - remove afterwards
localStorage.setItem('admin-login-token', 'admin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMzEwYzg0YTIyNjU1MzJmNzczMTJhOCIsImlhdCI6MTc4MTYwMDExOX0.5iPfwoCvOXQJ8bdX3ESbSviSDWhtU6JWPD34EeW9Q6M'); // paste your token here

const getAuth = () => {
  const tk = localStorage.getItem('admin-login-token');
  if (!tk) return '';
  return tk.startsWith('admin ') ? tk : `admin ${tk}`;
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: 'https://first-page-backend-production.up.railway.app/',
  headers: {
    authorization: getAuth(),
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <AdminProvider>
      <App />
    </AdminProvider>
  </ApolloProvider>,
);
