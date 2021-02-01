import React, { useState } from 'react'; 
import { Grid } from '@material-ui/core';
import { Input } from './components/input/Input';
import { Message } from './components/message/Message';
import { Nav } from './components/nav/Nav';
import { Room } from './components/room/Room';
import './App.css';

const USER_ID = 1;

function App() {
  const [messages, setMessages] = useState([{content: "Welcome to Go Chat app", author: 0}]); 

  return (
    <Grid container direction="column">
      
      <Grid item xs={12}> 
        <Nav />
      </Grid>
      
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Room title="9am in London" description="chatting about things"/>
          <Room title="Midnight in New York" description="chatting about things"/>
        </Grid>
        
        <Grid container item xs={8}>
          <Grid container item xs={12}>
            <Grid item xs={10}>
              9am in London
            </Grid>
            <Grid xs={2}>
              Profile Pictures
            </Grid>
          </Grid>

          <Grid container item xs={12} direction="column">
            {messages.map((msg, i) => {
              return (
                <Message content={msg.content} fromUser={msg.author === USER_ID} />
              );
            })}
          </Grid>
          <Input onSend={(msg) => setMessages([...messages, {content: msg, author: USER_ID}])}/>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default App;
