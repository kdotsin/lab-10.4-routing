import { useState } from "react";
import AuthContext from "../auth-context";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  function login() {
    setAuthenticated(true);
    console.log("hello");
    console.log(isAuthenticated);
  }

  function logout() {
    setAuthenticated(false);
    console.log(isAuthenticated);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        { isAuthenticated ? (
          <p>User is logged in</p>
        ) : (
          <p>User is not logged in</p>
        )}
      <Outlet />
    </AuthContext.Provider>
  )
}