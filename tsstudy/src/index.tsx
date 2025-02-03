import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "component/App";
import NotFound from "NotFound";
import reportWebVitals from "reportWebVitals";
import Todo from "component/Todo";
import TicTakToe from "component/TicTakToe";
import Layout from "Layout";
import Calendar from "component/Calendar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 모든 경로에 렌더링 */}
        <Route path="/" element={<Layout />}>
          {/* index : 기본 자식 라우트를 지정 */}
          <Route index path={"/App"} element={<App />} />
          <Route path={"/Todo"} element={<Todo />} />
          <Route path="/TicTakToe" element={<TicTakToe />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
