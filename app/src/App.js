import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Sidebar from './Components/Sidebar/Sidebar'
import Chat from "./Components/Chat/Chat"
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
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
          {/* Chat componenet */}
          {/* React-router for chats */}
        </div>
      </Router>
    </div>
  );
}

export default App;
