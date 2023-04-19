import React from 'react'
import {InputGroup, Input, Label} from 'reactstrap'

const Champion = ({champion, onChange}) => {

  return(
    <InputGroup>
      <Label>Champion</Label>
      <Input value={champion} onChange={onChange} readOnly />
  </InputGroup>
  )
}

export default Champion