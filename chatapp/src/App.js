import './App.css';
import { Room } from './components/room/Room';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="ChatNav">
          <Room title="9am in London" description="chatting about things"/>
          <Room title="Midnight in New York" description="chatting about things"/> 
        </div>
        <div className="ChatArea">
        </div>
      </div>
    </div>
  );
}

export default App;
