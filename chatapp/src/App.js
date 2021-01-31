import React, { useState } from 'react'; 
import { Input } from './components/input/Input';
import { Message } from './components/message/Message';
import { Nav } from './components/nav/Nav';
import { Room } from './components/room/Room';
import './App.css';

const USER_ID = 1;

function App() {
  const [messages, setMessages] = useState([]); 

  return (
    <div className="App">
      <Nav />
      <div className="Container">
        <div className="ChatNav">
          <Room title="9am in London" description="chatting about things"/>
          <Room title="Midnight in New York" description="chatting about things"/> 
        </div>
        <div className="ChatArea">
          <div>
            {messages.map((msg, i) => {
              
              return (
                <Message content={msg.content} fromUser={msg.author === USER_ID} />
              );
            })}
          </div>
          <div className="ChatInput">
            <Input onSend={(msg) => setMessages([...messages, {content: msg, author: USER_ID}])}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
