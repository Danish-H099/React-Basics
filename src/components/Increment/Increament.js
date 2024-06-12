import React, { useState, useEffect } from "react";

function Increment() {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(count >= 0);
    }, [count]);

    const increment = () => { 
        setCount(prevCount => prevCount + 1); 
    }; 
    const decrement = () => { 
        setCount(prevCount => prevCount - 1); 
    };

    const GiveStyle = {
        color: isActive ? 'green' : 'red',
    };

    return (
        <div className="Increment">
            <h1>Count: <span style={GiveStyle}>{count}</span></h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Increment;
