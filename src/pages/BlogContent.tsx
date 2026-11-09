import { useParams } from "react-router-dom";
import { findPost } from "../lib/posts";

export default function BlogContent() {
  let params = useParams();
  if (!params.slug) {
    return;
  }
  const post = findPost(params.slug);
  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ) : (
        <h1>Post Not Found</h1>
      )}
    </div>
  );
}
