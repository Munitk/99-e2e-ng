import React, { useState } from 'react';
export default function HooksPage() {
    const [count, setCount] = useState(10);
    const [age, setMyAge] = useState(20)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <br></br>
            age:{age}
            <button onClick={() => setMyAge(age + 1)}>
                Click mea
            </button>
        </div>

    )

}