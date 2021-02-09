import React, { useState } from 'react'; 
import { Input } from './components/input/Input';
import { Message } from './components/message/Message';
import { Nav } from './components/nav/Nav';
import { Room } from './components/room/Room';
import './App.css';
import { Divider } from '@material-ui/core';

const USER_ID = 1;


function App() {
  const [messages, setMessages] = useState([{content: "Welcome to Go Chat app", author: 0}]); 
  const [sideNavActive, setSideNavActive] = useState(true);

  return (
    <div className="App">
      <div className="NavBar">
        <div className="NavBar_Content"><p className="Login">Login</p></div>
      </div>
      <div className="SideNav">
        <p onClick={() => setSideNavActive(false)}>X</p>
      </div>
      <div className="Chat"></div>
    </div>
    /* <Input onSend={(msg) => setMessages([...messages, {content: msg, author: USER_ID}])}/> */
  );
}

export default App;
