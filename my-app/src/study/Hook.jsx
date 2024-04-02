/**
 * Hook은 무조건 최상위 레벨에서만 호출
 * 
 * 1) Hook은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출해야함
 * 2) 리액트 함수 컴포넌트에서만 Hook을 호출해야함
 */


/**Custom Hook
 * Custom Hook의 이름은 꼭 use로 시작해야함
 * 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때
 * 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리
 */
import { useState, useEffect } from "react";

function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });

    return isOnline;
}


// Hook들 사이에서 데이터를 공유하는 방법
const userList = [
    {id: 1, name: "YounHo"},
    {id: 1, name: "Gildong"},
    {id: 1, name: "Sungho"},
];

function ChatUserSelector(props) {
    const [userId, setUsetId] = useState(1);
    const isUserOnline = useUserStatus(userId);

    return (
        <>
            <Circle color={isUserOnline ? "green" : "red" } />
            <select 
                value={userId}
                onChange={event => setUserId(Number(event.target.value))}
            >
                {userList.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}

            </select>    
        </>
    );
}