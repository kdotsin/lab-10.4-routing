import { NavLink } from "react-router-dom";

function linkClass({ isActive }: { isActive: boolean }) {
  const base =
    "inline-flex min-h-11 items-center border-b-2 px-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust";
  if (isActive) {
    return base + " border-rust text-ink";
  }
  return base + " border-transparent text-muted hover:text-ink";
}

export default function NavBar() {
  return (
    <div className="border-b border-rule bg-paper">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 px-4 sm:px-8">
        <span className="py-3 font-display text-lg font-semibold tracking-tight">
          Routing Lab
        </span>
        <ul className="flex gap-4 sm:gap-6">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={linkClass}>
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
