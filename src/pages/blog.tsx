import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import matter from "gray-matter"
import { Post, PostData } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Blog() {
  const [postList, setPostList] = useState<Post[]>([])
  const [selectedTag, setSelectedTag] = useState<string>("")

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
      loadedPosts.sort((a, b) => b.date.getTime() - a.date.getTime())
      setPostList(loadedPosts)
    }

    loadPosts()
  }, [postFiles, selectedTag])

  return (
    <div className="w-screen max-w-full min-w-[200px] md:min-w-[400px] prose mx-auto p-4">
      <h1 className="text-center">Blog</h1>
      <Select
        value={selectedTag}
        onValueChange={(value) => setSelectedTag(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tags</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            {postList
              .flatMap((post) => post.tags)
              .filter((tag, index, self) => self.indexOf(tag) === index)
              .map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <ul>
        {postList
          .filter((post) =>
            selectedTag && selectedTag !== "all"
              ? post.tags.includes(selectedTag)
              : true
          )
          .map((post) => (
            <li
              key={post.slug}
              className="w-full p-4 my-2 border-2 border-accent rounded-lg"
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
          ))}
      </ul>
    </div>
  )
}
