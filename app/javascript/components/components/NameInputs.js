import React from 'react'
import { InputGroup, Button, Input } from "reactstrap"

const NameInputs = (props) => {
  return(
    <InputGroup>
      <Button onClick={props.onClick}>
        <Input onChange={props.onChange} onClick={props.onClick} value={props.value} />
      </Button>
    </InputGroup>
  )
}

export default NameInputs