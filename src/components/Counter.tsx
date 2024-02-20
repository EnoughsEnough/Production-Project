import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((prevState) => prevState + 1)
    }

    return (
        <div className={classes.main}>
            <h1>{counter}</h1>
            <button onChange={increment}>Click</button>
        </div>
    );
};
