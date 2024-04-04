// function Welcome(props) {
//     return <h1>안녕, {this.props.name}</h1>;
// }

// const element = <Welcome name="인제" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );


// // Component 안에 Component

// function Welcome(props) {
//     return <h1>안녕, {this.props.name}</h1>;
// }

// function App(props) {
//     return (
//         <div>
//             <Welcome name="Mike"/>
//             <Welcome name="Steve"/>
//             <Welcome name="Jane"/>
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


import React from "react";

const MyComponent = ({ message }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

const App = () => {
    const isLoggedIn = true;
    const message = isLoggedIn ? "Welcome back!" : "Please log in";

    return (
        <div>
            <MyComponent message={message}/>
        </div>
    );
};

export default App;