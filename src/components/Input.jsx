import {useState, useEffect, useRef} from 'react'
const Input = () => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [starton, setStarton] = useState(0);
    const [endon, setEndon] = useState(0);
    const [startoff, setStartoff] = useState(false);
    const ref = useRef(null);
    const handleStart = () => {
        if(startoff !== true){
            if(start !== 0){
                setStarton(+start);
            }
            setEndon(+end);
            setStartoff(true);
            starton2();
        } else {
            return;
        }
    }
    const starton2 =()=>{
        if(startoff){
            if(starton>endon){
                setStarton(0)
                alert('Starting point is bigger then end')
                return
            }
            ref.current = setInterval(() => {
                setStarton((prev) => {
                    if(prev<endon){
                        return prev+1
                    } else {
                        setStartoff(false);
                        clearInterval(ref.current)
                        return prev;
                    }
                })
            }, 1000);
        }else {
            ref.current = null;
        }
    }
    useEffect(()=>{
        if(startoff) {
            starton2();
        }
        return (()=>{
            console.log('clear')
            clearInterval(ref.current);
        })
    },[startoff])
    return (
    <div>
        <div>
            counter : {starton} and end on {end}
        </div>
        <div>
            <input type="number"  placeholder="starting with" onChange={(e)=> setStart(e.target.value)} />
            <input type="number" placeholder="ending at"onChange={(e)=> setEnd(e.target.value)} />
        </div>
        <div>
            <button onClick={()=> {
                handleStart()
            }}>start</button>
            <button onClick={()=> {
                clearInterval(ref.current)
                setStartoff(false)
            }}>stop</button>
        </div>
    </div>
    )
}

export default Input