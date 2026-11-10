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
      <div className="flex items-center gap-2 py-4 text-xs font-medium uppercase tracking-widest text-muted">
        <span
          aria-hidden="true"
          className={
            isAuthenticated
              ? "h-2 w-2 rounded-full bg-emerald-700"
              : "h-2 w-2 rounded-full border border-muted"
          }
        />
        {isAuthenticated ? (
          <p>User is logged in</p>
        ) : (
          <p>User is not logged in</p>
        )}
      </div>
      <Outlet />
    </AuthContext.Provider>
  );
}
