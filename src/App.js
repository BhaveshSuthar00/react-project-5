import {useState} from 'react';
import './App.css';
import Timer  from './components/Timer';
function App() {
  const [timer, setTimer] = useState(0);
  const [endTimer, setEndTimer] = useState(10);
  
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <div>
        {show ? < Timer setTimer={setTimer} setEndTimer={setEndTimer} timer={timer} endTimer={endTimer} /> :  null }
      </div>
      <div>
            <input type="number" placeholder='startTimer' onChange={(e)=>{setTimer(e.target.value)}} />
            <input type="number" placeholder='endTimer' onChange={(e)=>{setEndTimer(e.target.value)}} />
        </div>
    <button onClick={() => {
      show=== true ? setShow(false) : setShow(true)
    }}>
      {show ? 'Stop' : 'start'}
    </button>
    </div>
  );
}

export default App;
