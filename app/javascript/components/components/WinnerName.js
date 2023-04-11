import React from 'react'
import { InputGroup, Input } from 'reactstrap'

const WinnerName = (props) => {

  return (
    <div>
      <InputGroup>
        <Input value={`${props.winner}`}/>
      </InputGroup>
    </div>
  ) 
}

export default WinnerName