import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import BlogContent from "./pages/BlogContent";
import AuthLayout from "./pages/AuthLayout";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path=":slug" element={<BlogContent />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
