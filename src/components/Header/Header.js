import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import logo from '../../images/logo.png'
import {FaUserAlt} from 'react-icons/fa'
function Header() {
  return (
   <ReactNavbar 
   navColor1='white'
   navColor2='hsl(219,48%,8%)'
   burgerColor='hsl(250,100%,75%)'
   burgerColorHover='hsl(250,100%,75%)'
   logo={logo}
   logoWidth='250px'
   logoHoverColor='hsl(250,100%,75%)'
   nav2justifyContent="space-around"
   nav3justifyContent="space-around"
   link1Text="Home"
   link2Text="About"
   link3Text="Projects"
   link4Text="Contact"
   link1Url="/"
   link2Url="/about"
   link3Url="/projects"
   link4Url="/contact"
   link1Color='hsl(250,100%,75%)'
   link1ColorHover='white'
   link1Size='1rem'
   link1Paddding='3vmax'
   profileIcon={true}
   ProfileIconElement={FaUserAlt}
   profileIconColor='hsl(250,100%,75%)'
   profileIconColorHover='white'

   />
  )
}

export default Header