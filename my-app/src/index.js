import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TodoList, { useRef } from './components/TodoList/TodoList';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Test from './study/Test';
import ParentComponent from './study/ParentComponent';
import CounterComponent from './study/CounterComponent';

import Home from './components/Calculator'; // 계산기
import DatePicker from './components/DatePicker';

const root = createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <TodoList />
    </React.StrictMode>,
  );
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
