import React from "react"
// import GameBoard from "./GameBoard"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-text">
        <h1>Bar Hoops Bracket Challenge</h1>
        <h2>ARE YOU READY??</h2>
        <h2> Let's GOOOOOO!</h2>
        <button>
          <NavLink to={`/gameboard`} className="play-button">
            Play
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default Home
