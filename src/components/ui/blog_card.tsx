import { Post } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function BlogCard(post: Post) {
  return (
    <li
      key={post.slug}
      className="w-full p-4 my-4 border-2 border-accent rounded-lg"
    >
      <Link to={`/blog/${post.slug}`} className="text-accent">
        <h2 className="text-2xl">{post.title}</h2>
      </Link>
      <p className="text-lg">{post.lead}</p>
      <p className="text-gray-500 text-base">
        {post.date.toLocaleDateString()}
      </p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm text-accent border-[1px] border-accent rounded-lg px-2 py-1 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-lg">{post.excerpt}</p>
    </li>
  );
}
