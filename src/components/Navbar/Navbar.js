import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { IoMenu, IoClose } from "react-icons/io5"
import { NavHashLink as NavLink } from "react-router-hash-link"
// import { useScrollPosition } from "../../hooks/useScrollPosition"

import "./Navbar.css"
import logo from '../../assets/png/excel_logo_png.png';

function Navbar() {
  const [drawer, setDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setDrawer(true)
  }

  const handleDrawerClose = () => {
    setDrawer(false)
  }

  // const scrollPosition = useScrollPosition()



  return (
    <div className="navbar">
      <div className="navbar__main container">
        <div className="nav_logo">
        <NavLink
            to="/#"
          >
          <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="nav_contents">
          <NavLink
            to="/#home"
            className="nav__link"
          >
            HOME
          </NavLink>
          <NavLink
            to="/#about"
            className="nav__link"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/#rewards"
            className="nav__link"
          >
            REWARDS
          </NavLink>
          <NavLink
            to="/#FAQ"
            className="nav__link"
          >
            FAQ
          </NavLink>
          <NavLink
            to="/#contact"
            className="nav__link"
          >
            CONTACT
          </NavLink>
        </div>

        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              to="/#home"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              HOME
            </NavLink>
            <NavLink
              to="/#about"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/#rewards"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              REWARDS
            </NavLink>
            <NavLink
              to="/#FAQ"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              FAQ
            </NavLink>
            <NavLink
              to="/#contact"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar