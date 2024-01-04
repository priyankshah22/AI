import './styles.css';
import { useState } from 'react';

export default function SidNav() {
    const [show, setShow] = useState(true);
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"} component
            </button>
        </div>

    )
}