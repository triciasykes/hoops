import React from "react";
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {

  return(
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/gameboard" className="nav-link">
          Play
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation