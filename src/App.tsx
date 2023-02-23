import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
