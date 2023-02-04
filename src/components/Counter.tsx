import { useState } from "react"

import s from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0)

    const onClick = () => setCount(prev => prev + 1)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClick} className={s.btn}>Button</button>
        </div>
    )
};