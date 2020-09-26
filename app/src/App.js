import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Sidebar from './Components/Sidebar/Sidebar'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        {/* Chat componenet */}
        {/* React-router for chats */}
      </div>
    </div>
  );
}

export default App;
