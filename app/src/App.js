import React,{useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Sidebar from './Components/Sidebar/Sidebar'
import Chat from "./Components/Chat/Chat"
import { useStateValue } from './StateProvider'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Login from "./Components/Login/Login"
function App() {
  // useStateValue is what we already set in the StateProvider
  // This is what we use to access the 'global' information
  // {user} is to destructure the state which contains the user that we defined in the reducer
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                  <h1>Welcome to my slack clone</h1>
              </Route>
              </Switch>
              </div>
          </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
