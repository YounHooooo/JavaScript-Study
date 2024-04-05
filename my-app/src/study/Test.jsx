import React from "react";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        <select multiple={false}>
            <option>a</option>
            <option>b</option>
            <option>c</option>
        </select>
        </div>
    )
}

export default App;