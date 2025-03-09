import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface PostData {
  title: string
  lead: string
  date: string
  tags: string
}

export interface Post {
  slug: string
  title: string
  lead: string
  date: Date
  tags: string[]
  excerpt: string
  content: string
}
