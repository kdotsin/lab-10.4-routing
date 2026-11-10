import { useParams } from "react-router-dom";
import { findPost } from "../lib/posts";

export default function BlogContent() {
  let params = useParams();
  if (!params.slug) {
    return;
  }
  const post = findPost(params.slug);
  return (
    <div className="pt-10 sm:pt-16">
      {post ? (
        <article>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink/85">
            {post.content}
          </p>
        </article>
      ) : (
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-muted">
          Post Not Found
        </h1>
      )}
    </div>
  );
}
