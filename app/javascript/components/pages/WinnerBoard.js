import React, { useState } from 'react'
const WinnerBoard = () => {
  const [winnerHistory, setWinnerHistory] = useState([])

  useEffect(() => {
    readWinners()
  }, [])
  const readWinners = () => {
    fetch('/players' )
      .then((response) => response.json())
      .then((data) => console.log(data))
   }

   const addWinner = (winner) => {
    fetch('/players', {
      method: 'post',
      body: JSON.stringify(winner)
    })
    .then(response => response.json())
    .then(() => readWinners())
    .catch(errors => console.log("winners create errors: ", errors))
   } 
   
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