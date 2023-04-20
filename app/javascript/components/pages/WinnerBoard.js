import React, { useState } from 'react'
const WinnerBoard = () => {
  const [winnerHistory, setWinnerHistory] = useState([])

 
   
  return(
    <>
    <h1>Winner's Board</h1>
      <ul>
      {winnerHistory.map((winner, index) =>{
        return(
          <li key={index}>{winner}</li>
        )
        })}
          </ul>
  </>
  )
  }

  export default WinnerBoard