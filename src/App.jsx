import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
// import Image from "./Components/Image"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/:id" element={<Image/>}/> */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
