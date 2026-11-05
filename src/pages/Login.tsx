import { useState } from "react";

export default function Login({}) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  function login() {
    setAuthenticated(true);
    console.log("hello");
    console.log(isAuthenticated);
  }

  function logout() {
    setAuthenticated(false);
    console.log(isAuthenticated)
  }

  return (
    <div className="flex gap-5">
      <h1>THE LOGIN PAGE</h1>
      {isAuthenticated ? (
        <button className="outline-solid outline-black" onClick={logout}>
          Log Out
        </button>
      ) : (
        <button className="outline-solid outline-black" onClick={login}>
          Log In
        </button>
      )}
      <div>
        {isAuthenticated ? <p>youre logged in</p> : <p>youre logged out</p>}
      </div>
    </div>
  );
}
