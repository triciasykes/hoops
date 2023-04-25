import { render } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"

import Champion from "./Champion"

describe("<Champion />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Champion />
      </BrowserRouter>
    )
  })
})