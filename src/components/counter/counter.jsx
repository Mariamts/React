import { useState } from "react";
import Color from "../colorfill/color";
import './counter.css'

function Counter({count=0}) {

    const [counter, setCounter] = useState(count);

    return (
        <div>
            <button onClick={() => setCounter(counter+1)} >increase</button>
            <button onClick={() => setCounter(counter+5)} >+ 5</button>
            <button onClick={() => setCounter(counter+100)} >+ 100</button>
            <button onClick={() => setCounter(counter-1)}>decrease</button>
            <button onClick={() => setCounter(counter-5)}>-5</button>
            <button onClick={() => setCounter(counter-100)}>- 100</button>
            <Color count={counter} />
        </div>
    )
}
export default Counter;