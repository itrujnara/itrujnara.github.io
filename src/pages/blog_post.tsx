import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import matter from "gray-matter"
import { Post, PostData } from "@/lib/utils"

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState<Post>({
    slug: "",
    title: "",
    lead: "",
    date: new Date(0),
    tags: [],
    excerpt: "",
    content: "",
  })

  const [postList, setPostList] = useState<Post[]>([])

  const postFiles = import.meta.glob<string>("../content/*.md", {
    query: "?raw",
    import: "default",
  })

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts: Post[] = await Promise.all(
        Object.entries(postFiles).map(async ([filePath, post]) => {
          const module = await post()
          const parsed = matter(module)
          return {
            slug: filePath.split("/").pop()?.replace(".md", "") || "",
            title: (parsed.data as PostData).title,
            lead: (parsed.data as PostData).lead,
            date: new Date((parsed.data as PostData).date),
            tags: (parsed.data as PostData).tags.split(","),
            excerpt:
              parsed.content.length > 150
                ? parsed.content.slice(0, 150) + "..."
                : parsed.content,
            content: parsed.content,
          }
        })
      )
      setPostList(loadedPosts)
    }

    loadPosts()
  }, [])

  useEffect(() => {
    const loadPost = async () => {
      const match = postList.find((p) => p.slug === slug)
      console.log(match)
      if (!match) {
        setPost({
          slug: "",
          title: "Post not found",
          lead: "",
          date: new Date(0),
          tags: [],
          excerpt: "",
          content: "",
        })
        return
      }

      setPost(match)
    }

    loadPost()
  }, [slug, postList])

  return (
    <div className="prose mx-auto p-4">
      <Link to="/blog" className="text-blue-600 hover:underline">
        ← Back to Blog
      </Link>
      <h1>{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.date.toString()}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  )
}
