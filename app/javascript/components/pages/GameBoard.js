import React, { useState } from 'react'
import NameInputs from '../components/NameInputs'
import WinnerName from '../components/WinnerName'
import { Label } from 'reactstrap'

const GameBoard = () => {

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

  const [semis1, setSemis1] = useState("")
  const [semis2, setSemis2] = useState("")

  const [finalWinner, setFinalWinner] = useState("")


  const handleChange = (e) =>{
    let player = e.target.value
    setStartingPlayers(player)
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

  const semiWinner1Click = (e) => {
    let semiWinner1 = e.target.value
    console.log(semiWinner1)
    setSemis1(semiWinner1)
  }
  const semiWinner2Click = (e) => {
    let semiWinner2 = e.target.value
    setSemis2(semiWinner2)
  }

  const finalWinnerClick = (e) => {
    let finalWinner = e.target.value
    setFinalWinner(finalWinner)
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
        <WinnerName onClick={semiWinner1Click} winner={winner1}/>
      </div>
      <div className="winner-2">
        <Label>Quarterfinal Winner 2</Label>
        <WinnerName onClick={semiWinner1Click} winner={winner2} />
      </div>
      <div className="winner-3">
        <Label>Quarterfinal Winner 3</Label>
        <WinnerName onClick={semiWinner2Click} winner={winner3}/>
      </div>
      <div className="winner-4">
        <Label>Quarterfinal Winner 4</Label>
        <WinnerName  onClick={semiWinner2Click} winner={winner4}/>
      </div>
      <div className="semi-winner-1">
        <Label>Semifinal Winner 1</Label>
        <WinnerName onClick={semiWinner1Click} winner={semis1}/>
      </div>
      <div className="semi-winner-2">
        <Label>Semifinal Winner 2</Label>
        <WinnerName onClick={setFinalWinner} winner={semis2}/>
      </div>
      <div className="winner-final">
        <Label>Winner!</Label>
        <WinnerName onClick={finalWinnerClick} winner={finalWinner} />
      </div>
    </div>
  )
}

export default GameBoard