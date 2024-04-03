/**
 * List 목록
 * Array 배열 = JavaScript의 변수나 객체들을
 * 하나의 변수로 묶어 놓은 것
 */



/**
 * key
 * 열쇠는 다 모양이 다르다
 * 각 객체나 아이템을 구분할 수 있는 고유의 값
 * 아이템들을 구분하기 위한 고유한 문자열
 */



/**
 * map
 */

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );



// 목록으로 출력
// function NumberList(props) {
//     const { numbers } = props;

//     const listItems = numbers.map((number) =>
//     <li>{number}</li>
//     );

//     return (
//         <ul>{listItems}</ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render (
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );



// key로 값을 사용하는 경우
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
);


// key로 index를 사용하는 경우
const todoItems = todos.map((todo, index) =>
    // 아이템들의 고유한 ID가 없을 경우에만 사용해야 함
    <li key={index}>
        {todo.text}
    </li>
);

/** map() 함수 안에 있는 ELements는 꼭 key가 필요함!! */