import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home_page";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog_post";
import NotFound from "./pages/not_found";
import Header from "./components/header";
import { ThemeProvider } from "./lib/theme_provider";
import ProjectsPage from "./pages/projects";
import CVPage from "./pages/cv_page";
import ContactPage from "./pages/contact";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen max-w-full flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <div className="max-w-[min(800px,100%)] mx-auto p-4">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/projects" Component={ProjectsPage} />
            <Route path="/cv" Component={CVPage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/blog" Component={Blog} />
            <Route path="/blog/:slug" Component={BlogPost} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
