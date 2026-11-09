import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import BlogContent from "./pages/BlogContent";
// import { createContext, useState } from "react";

function App() {
  // const AuthContext = createContext(false)
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path=":slug" element={<BlogContent />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
