import React from 'react'
import { InputGroup, Label, Input } from "reactstrap"

const NameInputs = (props) => {
  console.log(props)

    return(
      <div>
        <InputGroup>
          <Input onChange={props.onChange} onClick={props.onClick} />
        </InputGroup>
    </div>
  )
}

export default NameInputs