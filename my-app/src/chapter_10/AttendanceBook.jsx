import React from "react";

const students = [
    {
        id: 1,
        name: "Younho",
    },
    {
        id: 2,
        name: "Gildong",
    },
    {
        id: 3,
        name: "SungHo",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;