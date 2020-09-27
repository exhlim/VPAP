import React,{useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Sidebar from './Components/Sidebar/Sidebar'
import Chat from "./Components/Chat/Chat"
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Login from "./Components/Login/Login"
function App() {
  const [user, setUser] = useState(null)
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
