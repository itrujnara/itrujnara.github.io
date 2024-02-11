import { Route, Routes } from "react-router"
import "./App.css"
import Landing from "./pages/Landing"
import Dispatch from "./pages/Dispatch"
import NotFound from "./pages/NotFound"
import AppDispatch from "./pages/AppDispatch"

function App() {
  return (
    <div className="w-screen flex flex-col min-h-screen bg-primarybg text-primaryfg">
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/dispatch" Component={Dispatch} />
        <Route path="/appDispatch" Component={AppDispatch} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  )
}

export default App
