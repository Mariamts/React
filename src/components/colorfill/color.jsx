import { useState } from 'react';
import './color.css'
function Color({count}) {
    const [color, setColor] = useState('');

    return (
        <div>
            <div className="color-wrap">
                <div className="size color1" onClick={() => setColor("color1")}></div>
                <div className="size color2" onClick={() => setColor("color2")}></div>
                <div className="size color3" onClick={() => setColor("color3")}></div>
                <div className="size color4" onClick={() => setColor("color4")}></div>
                <div className="size color5" onClick={() => setColor("color5")}></div>
                <div className="size color6" onClick={() => setColor("color6")}></div>
                <div className="size color7" onClick={() => setColor("color7")}></div>
            </div>
            <h1 className={color}>Result = {count}</h1>
        </div>
    )
}
export default Color;