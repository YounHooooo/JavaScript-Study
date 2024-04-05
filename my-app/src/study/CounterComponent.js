import React, { useState } from "react";

// state 

// function CounterComponent() {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     const decreament = () => {
//         setCount(count - 1);
//     };

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decreament}>Decreament</button>
//         </div>
//     );
// }

// function CounterComponent() {

//     // const numbers = [1, 2, 3, 4, 5];
//     // const doubled = numbers.map((number) => number * 2);

//     return (
//         <div>
//             <p>기본값 : {numbers}</p>
//             <p>두배의 수 : {doubled}</p>
//         </div>
//     )
// }

// function KeyListComponent() {
//     const numbers = [1, 2, 3, 4, 5];
//     const listItems = numbers.map((number) => 
    
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );
// }


// const todoItems = todos.map((todo) => 
//     <li key={todo.id}>
//         {todo.text}
//     </li>
// );

// const name = 'Youn Ho';
// const element = <h1>Hello, {name}</h1>;

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Younho',
    lastName: 'Lee'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}



export default formatName;