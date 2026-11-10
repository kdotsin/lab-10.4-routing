import { useAuth } from "../auth-context";

export default function Admin() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="pt-10 sm:pt-16">
      {isAuthenticated ? (
        <h1 className="border-l-4 border-emerald-700 pl-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Welcome you have access to Admin Page
        </h1>
      ) : (
        <h1 className="border-l-4 border-rust pl-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          User must log in to access admin page
        </h1>
      )}
    </div>
  );
}
