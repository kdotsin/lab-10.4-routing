import { posts } from "../lib/posts"
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <ul>
            {posts.map((post) => 
                <li key={post.id}>
                    <Link to={post.slug}>{post.title}</Link>
                </li>
            )}
        </ul>
    )
}