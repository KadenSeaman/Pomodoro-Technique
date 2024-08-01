import { useState } from 'react'
import './App.scss'

function App() {

  const [breakAmount,setBreakAmount] = useState(5);
  const [sessionLengthAmount,setSessionLengthAmount] = useState(25);
  const [currentTimeLeft,setCurrentTimeLeft] = useState(25);
  const [isCountingDown, setIsCountingDown] = useState(false);

  function decreaseBreak(){
    if(breakAmount === 1 || isCountingDown){
      return;
    }
    setBreakAmount(breakAmount - 1);
  }
  function increaseBreak(){
    if(breakAmount === 60 || isCountingDown){
      return;
    }
    setBreakAmount(breakAmount + 1);
  }
  function decreaseSessionLength(){
    if(sessionLengthAmount === 1 || isCountingDown){
      return;
    }
    setSessionLengthAmount(sessionLengthAmount - 1);
  }
  function increaseSessionLength(){
    if(sessionLengthAmount === 60 || isCountingDown){
      return;
    }
    setSessionLengthAmount(sessionLengthAmount + 1)
  }
  function resetSession(){
    setIsCountingDown(false);
    setBreakAmount(5);
    setSessionLengthAmount(25);
    setCurrentTimeLeft(25);
  }
  function startSession(){
    if(isCountingDown){
      setIsCountingDown(false);
    }
    else{
      setIsCountingDown(true);
    }
  }

  return (
    <div id="wrapper">
      <h1>25 + 5 Clock</h1>
      <div className="controls-container">
        <div className="length-container">
          <h2 id="break-label">Break Length</h2>
          <div className="controls">
            <button onClick={decreaseBreak} id="break-decrement">⬇️</button>
            <h2 id="break-length">{breakAmount}</h2>
            <button onClick={increaseBreak} id="break-increment">⬆️</button>
          </div>
        </div>
        <div className="length-container">
          <h2 id="session-label">Session Length</h2>
          <div className="controls">
            <button onClick={decreaseSessionLength} id="session-decrement">⬇️</button>
            <h2 id="session-length">{sessionLengthAmount}</h2>
            <button onClick={increaseSessionLength} id="session-increment">⬆️</button>
          </div>
        </div>
      </div>

      <div>
        <h1>Session</h1>
        <h1 id="time-left">{currentTimeLeft}</h1>
      </div>
      <div className="controls">
        <button onClick={startSession} id="start-stop">⏯️</button>
        <button onClick={resetSession} id="reset">⏹️</button>
      </div>
    </div>
  )
}

export default App
