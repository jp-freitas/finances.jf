import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";

import { PrivateRoute } from './components/PrivateRoute';

import { AuthContextProvider } from "./contexts/AuthContext";
import { TransactionsProvider } from './contexts/TransactionsContext';

import { ToastContainer } from "react-toastify";

Modal.setAppElement('#root');

export function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <TransactionsProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path='/' exact component={() => <SignIn setAuthenticated={setAuthenticated} />} />
            <PrivateRoute authenticationPath="/" isAuthenticated={authenticated} path="/dashboard" component={Dashboard} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={2000} position='top-right' />
    </TransactionsProvider>
  );
}
