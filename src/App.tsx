import { Route, Routes } from "react-router"
import "./App.css"
import Landing from "./pages/Landing"
import Dispatch from "./pages/Dispatch"
import NotFound from "./pages/NotFound"
import AppDispatch from "./pages/AppDispatch"
import Contact from "./pages/Contact"
import Email from "./pages/Email"
import SciEmail from "./pages/SciEmail"
import GenEmail from "./pages/GenEmail"
import AutoEmail from "./pages/AutoEmail"
import Phone from "./pages/Phone"
import Socials from "./pages/Socials"

function App() {
  return (
    <div className="w-screen flex flex-col min-h-screen bg-primarybg text-primaryfg">
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/dispatch" Component={Dispatch} />
        <Route path="/appDispatch" Component={AppDispatch} />
        <Route path="/contact" Component={Contact} />
        <Route path="/email" Component={Email} />
        <Route path="/sciEmail" Component={SciEmail} />
        <Route path="/genEmail" Component={GenEmail} />
        <Route path="/autoEmail" Component={AutoEmail} />
        <Route path="/phone" Component={Phone} />
        <Route path="/socials" Component={Socials} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  )
}

export default App
