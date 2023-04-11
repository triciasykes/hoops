import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import GameBoard from "./pages/GameBoard"
import Home from "./pages/Home"
const App = () => {
  return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gameboard" element={<GameBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
