import { posts } from "../lib/posts";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <ul className="mt-6 border-t border-rule sm:mt-10">
      {posts.map((post) => (
        <li key={post.id} className="border-b border-rule">
          <Link
            to={post.slug}
            className="group block py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
          >
            <span className="font-display text-2xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-rust">
              {post.title}
            </span>
            <span className="mt-2 line-clamp-2 block text-[15px] leading-relaxed text-muted">
              {post.content}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
