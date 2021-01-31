import './App.css';
import { Message } from './components/message/Message';
import { Nav } from './components/nav/Nav';
import { Room } from './components/room/Room';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Container">
        <div className="ChatNav">
          <Room title="9am in London" description="chatting about things"/>
          <Room title="Midnight in New York" description="chatting about things"/> 
        </div>
        <div className="ChatArea">
          <Message />
          <Message />
          <Message />
          <Message fromUser />
          <Message />
        </div>
      </div>
    </div>
  );
}

export default App;
