import React,{useEffect} from 'react'

const Dd = ({timer,endTimer, setTimer, setEndTimer}) => {
    useEffect(()=> {
        const startEvent = setInterval(() => {
            setTimer((prev)=>{
                if(prev === endTimer) {
                    setTimer(prev)
                    clearInterval(startEvent)
                return;
            }
            else if(prev<endTimer){
                setTimer(prev + 1);
            }
            })
        }, 1000);
        return () => {
            clearInterval(startEvent);
            console.log('here')
        }
    }, [])
    return (
    <>
        <div>
        start from {timer}, end at {endTimer}
        </div>
    </>
    )
}

export default Dd