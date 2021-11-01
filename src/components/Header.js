import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"

const Header = () => {
  return (
    <Nav>
      <NavLogo to="/">A|R</NavLogo>
      <Hamburger></Hamburger>
      <NavMenu>
        {
          menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))
        }
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  background: transparent;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 16px calc((100vw - 1180px) / 2);
  z-index: 200;
  position: relative;
  border-bottom: #707070 1px solid;

  @media screen and (max-width: 1180px) {
    padding: 0 4px;
  }
`

const NavLogo = styled(Link)`
  color: #1d3557;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 48px;
  @media screen and (max-width: 768px) {
    padding: 4px;
  }
`
const NavLink = styled(Link)`
  color: #1d3557;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 40px;
  cursor: pointer;
  text-transform: uppercase;
`
const Hamburger = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20%, 45%);
    font-size: 32px;
    cursor: pointer;
    color: #1d3557;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`