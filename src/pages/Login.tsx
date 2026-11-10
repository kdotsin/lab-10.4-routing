import { useAuth } from "../auth-context";

export default function Login() {
  const { isAuthenticated, login, logout } = useAuth();

  const buttonClass =
    "min-h-11 rounded-md px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust";

  return (
    <div className="pt-10 sm:pt-16">
      <div className="max-w-md rounded-lg border border-rule bg-card p-6 sm:p-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          THE LOGIN PAGE
        </h1>
        <div className="mt-2 text-muted">
          {isAuthenticated ? <p>youre logged in</p> : <p>youre logged out</p>}
        </div>
        <div className="mt-8">
          {isAuthenticated ? (
            <button
              className={buttonClass + " border border-ink text-ink hover:bg-ink hover:text-paper"}
              onClick={logout}
            >
              Log Out
            </button>
          ) : (
            <button
              className={buttonClass + " bg-rust text-white hover:bg-ink"}
              onClick={login}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
