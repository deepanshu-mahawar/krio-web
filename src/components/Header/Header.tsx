"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { HeaderSection, ButtonSection, Button, MobileIcons, MobileMenu } from "./Style"
import NavLinks from "../Common/NavLinks/NavLinks"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"

function Header() {
  const [ActiveBtn, isActiveBtn] = useState<"login" | "signup">("login");
  const[isOpen, setIsOpen] = useState(false);
  return (
    <>
    <HeaderSection>
        <Link href="#" className="logolink">
        <Image src={logo} alt="#" className="logo"></Image>
        </Link>

        <NavLinks />

        <ButtonSection>
            <Button  
              $active = {ActiveBtn === "signup"}
              onClick={()=> isActiveBtn("signup")}
            >
              Sign Up
            </Button>
            
            <Button 
            $active = {ActiveBtn === "login"}
            onClick={()=> isActiveBtn("login")} 
            // className="active"
            >Log In
            </Button>
        </ButtonSection>

        <MobileIcons onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoCloseOutline className="mobileIcons"/> : <RxHamburgerMenu className="mobileIcons"/>}
        </MobileIcons>
    </HeaderSection>

    {isOpen && (
      <MobileMenu>
      <a href="#" className="mobileMenu">Home</a>
      <a href="#" className="mobileMenu">About us</a>
      <a href="#" className="mobileMenu">Our services</a>
      <a href="#" className="mobileMenu">Portfolio</a>
      <a href="#" className="mobileMenu">Career</a>
      <a href="#" className="mobileMenu">Contact us</a>
      <a href="#" className="logSignBtn">Sign Up</a>
      <a href="#" className="logSignBtn">Log In</a>
      </MobileMenu>)}
  </>
  )
}

export default Header

