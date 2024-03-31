function Welcome(props) {
    return <h1>안녕, {this.props.name}</h1>;
}

const element = <Welcome name="인제" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);


// Component 안에 Component

function Welcome(props) {
    return <h1>안녕, {this.props.name}</h1>;
}

function App(props) {
    return (
        <div>
            <Welcome name="Mike"/>
            <Welcome name="Steve"/>
            <Welcome name="Jane"/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)