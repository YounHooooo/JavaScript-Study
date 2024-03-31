
// Function Component (함수 컴포넌트)
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>;
}


// Class Component (클래스 컴포넌트)
class Welcome extends React.Component {
    render() {
    return <h1>안녕, {this.props.name}</h1>;
        
    }
}

/**
 * Component의 이름
 * 항상 대문자로 시작해야함
 */

// HTML div 태그로 인식
const elemnent = <div />;

// Welcome이라는 리액트 COmponent로 인식
const element = <Welcome name="인제" />;