import { Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./Layout"
import ReduxCounter from "./components/ReduxCounter"
import FetchPosts from "./pages/FetchPosts"
import BasicForm from "./components/BasicForm"
import ToggleParagraph from "./components/ToggleParagraph"
import ResetHandledForm from "./components/ResetHandledFrom"
import TodoPage from "./pages/TodoPage"

function App() {

  return (
    <div className="flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<Layout/>}>

        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/redux-counter" element={<ReduxCounter/>}/>
        <Route path="/fetch-posts" element={<FetchPosts/>}/>
        <Route path="/basic-form" element={<BasicForm/>}/>
        <Route path="/toggle-paragraph" element={<ToggleParagraph/>}/>
        <Route path="/todo" element={<TodoPage/>}/>
        <Route path="/reset-form" element={<ResetHandledForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
