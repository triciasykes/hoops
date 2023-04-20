import React, { useState, useEffect } from 'react'
import NameInputs from '../components/NameInputs'
import WinnerName from '../components/WinnerName'
import Champion from '../components/Champion'
import { Label } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const GameBoard = () => {
  const navigate= useNavigate()
  const [startingPlayers, setStartingPlayers] = useState([
    {name:""},
    {name:""},
    {name:""},
    {name:""},
    {name:""},
    {name:""},
    {name:""},
    {name:""}
  ])

  const [winner1, setWinner1] = useState("")
  const [winner2, setWinner2] = useState("")
  const [winner3, setWinner3] = useState("")
  const [winner4, setWinner4] = useState("")

  const [round2A, setRound2A] = useState("")
  const [round2B, setRound2B] = useState("")

  const [champion, setChampion] = useState("")

  const [winnerHistory, setWinnerHistory] = useState([])


  const handleChange = (e) =>{
    let player = e.target.value
    setStartingPlayers(player)
  }
  const winnerChange = (e) => {
    let winner = e.target.value
    console.log(winner)
  }



  // useEffect(() => {
  //   readWinners()
  // }, [])
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
    .then(response => console.log(response.json()))
    .then(() => readWinners())
    .catch(errors => console.log("winners create errors: ", errors))
   } 
  
 
   
  const winner1Click = (e) => {
    let winnerName = e.target.value
    setWinner1(winnerName)
  }

  const winner2Click = (e) => {
    let winnerName = e.target.value
    setWinner2(winnerName)
  }

  const winner3Click = (e) => {
    let winnerName = e.target.value
    setWinner3(winnerName)
  }

  const winner4Click = (e) => {
    let winnerName = e.target.value
    setWinner4(winnerName)
  }

  const semiWinner2Click = (e) => {
    let winner = e.target.value
    setRound2B(winner)
  }
  const semiWinner1Click = (e) => {
    let winner = e.target.value
    setRound2A(winner)

  }
  const setChampionClick = (e) => {
    let champion = e.target.value
    setChampion(champion)
    }

  return(
    <div id="main-gameboard"> 
      <div id="gameboard-header">LEARN BRACKET CHALLENGE</div>
      <div className="player-one">
        <Label>Player One</Label>
        <NameInputs onClick={winner1Click} onChange={handleChange} />
      </div>
      <div className="player-two">
        <Label>Player Two</Label>
        <NameInputs onClick={winner1Click} onChange={handleChange} />
      </div>
      <div className="player-three">
        <Label>Player Three</Label>
        <NameInputs onClick={winner2Click} onChange={handleChange} />
      </div>
      <div className="player-four">
        <Label>Player Four</Label>
        <NameInputs onClick={winner2Click} onChange={handleChange} />
      </div>
      <div className="player-five">
        <Label>Player Five</Label>
        <NameInputs onClick={winner3Click} onChange={handleChange} />
      </div>
      <div className="player-six">
        <Label>Player Six</Label>
        <NameInputs onClick={winner3Click} onChange={handleChange} />
      </div>
      <div className="player-seven">
        <Label>Player Seven</Label>
        <NameInputs onClick={winner4Click} onChange={handleChange} />
      </div>
      <div className="player-eight">
        <Label>Player Eight</Label>
        <NameInputs onClick={winner4Click} onChange={handleChange} />
      </div>
      <div className="winner-1">
        <Label>Quarterfinal Winner 1</Label>
        <WinnerName onClick={semiWinner1Click} onChange={winnerChange} winner={winner1} />
      </div>
      <div className="winner-2">
        <Label>Quarterfinal Winner 2</Label>
        <WinnerName onClick={semiWinner1Click} onChange={winnerChange} winner={winner2} />
      </div>
      <div className="winner-3">
        <Label>Quarterfinal Winner 3</Label>
        <WinnerName onClick={semiWinner2Click} onChange={winnerChange} winner={winner3}/>
      </div>
      <div className="winner-4">
        <Label>Quarterfinal Winner 4</Label>
        <WinnerName onClick={semiWinner2Click} onChange={winnerChange}  winner={winner4}/>
      </div>
      <div className="semi-winner-1">
        <Label>Semifinal Winner 1</Label>
        <WinnerName onClick={setChampionClick} onChange={winnerChange} winner={round2A}/>
      </div>
      <div className="semi-winner-2">
        <Label>Semifinal Winner 2</Label>
        <WinnerName onClick={setChampionClick} onChange={winnerChange} winner={round2B}/>
      </div>
      <div className="winner-final">
        <Champion champion={champion} onChange={winnerChange} onClick={addWinner} />
      </div>
    </div>
  )
}

export default GameBoard