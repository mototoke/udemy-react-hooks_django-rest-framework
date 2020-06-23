import React, { useReducer } from 'react';

const initalState = 0;
const reducer = (currentState, action) => {
    switch (action) {
        case "add_1":
            return currentState + 1;

        case 'mulitiple_3':
            return currentState * 3;

        case 'reset':
            return initalState;

        default:
            return currentState;
    }
}

const BasicReducer = () => {

    const [count, dispatch] = useReducer(reducer, initalState);

    return (
        <div>
            <div>Count {count}</div>
            <button onClick={() => dispatch("add_1")}>Add+1</button>
            <button onClick={() => dispatch("mulitiple_3")}>Multiple*3</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default BasicReducer;
