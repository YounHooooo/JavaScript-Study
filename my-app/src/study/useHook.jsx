// useMemo() 사용법
const memoizedValue = useMemo( 
    () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    // 랜더링이 일어나는 동안 실행
    return computeExpensiveValue("의존성 변수1", "의존성 변수2");
    },
    ["의존성 변수1", "의존성 변수2"]
);


// useCallback
// useMemo() Hook과 유사하지만 값이 아닌
// 함수를 반환
const memoizedCallback = useCallback(
    () => {
        doSomething("의존성 변수1", "의존성 변수2")
    },
    ["의존성 변수1", "의존성 변수2"]
);

// 동일한 역할을 하는 두 줄의 코드
useCallback("함수", "의존성 배열");

useMemo(() => "함수", "의존성 배열");


// useRef()
// Reference를 사용하기 위한 Hook
// Reference : 특정 컴포넌트에 접근할 수 있는 객체
const refContainer = useref("초기값");