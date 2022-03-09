import React  from 'react'
import Dd from './dd'
const Timer = ({setTimer, setEndTimer, timer, endTimer}) => {
  return (
    <>
      
      < Dd setTimer={setTimer} setEndTimer={setEndTimer} timer={timer} endTimer={endTimer}/>
      
    </>
  )
}

export default Timer