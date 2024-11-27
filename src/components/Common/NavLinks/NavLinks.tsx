"use client"

import React, { useState } from 'react'
import { Navigations, NavMenus } from './style'

const NavLinks = () => {
  const [ActiveBtn, isActiveBtn] = useState<"home" | "aboutus" | "ourservices" | "portfolio" | "career" | "contactus">("home");
  return (
    <Navigations>
    <NavMenus href="#" 
    // className='active'
    $active = {ActiveBtn === "home"}
    onClick={() => isActiveBtn("home")}
    >Home</NavMenus>

    <NavMenus href="#"
    $active = {ActiveBtn === "aboutus"}
    onClick={() => isActiveBtn("aboutus")}
    >About us</NavMenus>

    <NavMenus href="#"
    $active = {ActiveBtn === "ourservices"}
    onClick={() => isActiveBtn("ourservices")}
    >Our services</NavMenus>

    <NavMenus href="#"
    $active = {ActiveBtn === "portfolio"}
    onClick={() => isActiveBtn("portfolio")}
    >Portfolio</NavMenus>

    <NavMenus href="#"
    $active = {ActiveBtn === "career"}
    onClick={() => isActiveBtn("career")}
    >Career</NavMenus>

    <NavMenus href="#"
    $active = {ActiveBtn === "contactus"}
    onClick={() => isActiveBtn("contactus")}
    >Contact us</NavMenus>
    </Navigations>
  )
}

export default NavLinks


// "use client"

// import { NavProps } from './type'
// import styled from 'styled-components'
// import React from 'react'

// const NavLinks:React.FC<NavProps> = ({
//   textColor, bgColor, hoverpadding = '0px 0px', Margin = '0px 25px 0px 0px'}) => {
//   return (
//     <Navigations style={{backgroundColor: bgColor, color: textColor}}>
//     <NavMenus style={{margin : Margin, padding: hoverpadding}} href="#">Home</NavMenus>
//     <NavMenus style={{margin : Margin, padding: hoverpadding}}href="#">About us</NavMenus>
//     <NavMenus style={{margin : Margin, padding: hoverpadding}}href="#">Our services</NavMenus>
//     <NavMenus style={{margin : Margin, padding: hoverpadding}}href="#">Career</NavMenus>
//     <NavMenus style={{margin : Margin, padding: hoverpadding}}href="#">Portfolio</NavMenus>
//     <NavMenus style={{margin : Margin, padding: hoverpadding}}href="#">Contact us</NavMenus>
//     </Navigations>
//   )
// }

// export default NavLinks

// const Navigations = styled.nav`
//     text-align: center;
//     font-size: 16px;
//     color: black;
//     background: white;
//     font-weight: 400;
// `;

// const NavMenus = styled.a<NavProps>`
//     /* margin: 0px 25px 0px 0px; */
//     margin: ${({Margin}) => Margin};
//     text-decoration: none;

//     &:hover{
//         background-color: black;
//         color: white;
//         /* padding: 18px 35px;  */
//         padding: ${({hoverpadding}) => hoverpadding}; 
//         border-radius: 30px;
//         font-size: 15px;
//         text-transform: uppercase;
//     }
// `;


