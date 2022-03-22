import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Navigation from './components/Navigation/Navigation';
import Todo from './components/Todo/Todo';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
            <PrivateRoute path="/todo"><Todo></Todo></PrivateRoute>
            <Route path="/login"><Login></Login></Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
};

export default App;