import { Route, Routes } from "react-router"
import "./App.css"
import HomePage from "./pages/home_page"
import Blog from "./pages/blog"
import BlogPost from "./pages/blog_post"
import NotFound from "./pages/not_found"
import Header from "./components/header"
import { ThemeProvider } from "./lib/theme_provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <div className="max-w-[800px] mx-auto p-4">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/blog" Component={Blog} />
            <Route path="/blog/:slug" Component={BlogPost} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
