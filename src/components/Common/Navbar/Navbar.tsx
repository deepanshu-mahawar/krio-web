"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { Buttons, Btn, ListItem, Navigations, LogoSection, SubContainer, MainContainer,
    MobileIcon, MobileMenuSection, MobileNavigations, MobileListItem, MobileBtn
 } from './style'
import Link from 'next/link'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'


const Navbar = () => {
    const [activeBtn, isActiveBtn] = useState<"login" | "signup">("login");
    const [activeLink, isActiveLink] = useState<"home" | "about" | "services" | "portfolio" | "career" | "contact">("home");
    const [isOpen, setIsOpen] = useState(false);
  return (<>
    <MainContainer>
        <SubContainer>
            <LogoSection>
                <Image src={logo} alt='logo' className='logo'></Image>
            </LogoSection>
            <Navigations>
                <ListItem 
                $active = {activeLink === "home"}
                onClick={() => isActiveLink("home")}
                ><Link href="#">Home</Link></ListItem>
                <ListItem
                $active = {activeLink === "about"}
                onClick={() => isActiveLink("about")}
                ><Link href="#">About</Link></ListItem>
                <ListItem
                $active = {activeLink === "services"}
                onClick={() => isActiveLink("services")}
                ><Link href="#">Services</Link></ListItem>
                <ListItem
                $active = {activeLink === "portfolio"}
                onClick={() => isActiveLink("portfolio")}
                ><Link href="#">Portfolio</Link></ListItem>
                <ListItem
                $active = {activeLink === "career"}
                onClick={() => isActiveLink("career")}
                ><Link href="#">Career</Link></ListItem>
                <ListItem
                $active = {activeLink === "contact"}
                onClick={() => isActiveLink("contact")}
                ><Link href="#">Contact</Link></ListItem>
            </Navigations>
            <Buttons>
                <Btn 
                $active = {activeBtn === "signup"}
                onClick={() => isActiveBtn("signup")}
                ><Link href='#'>Signup</Link></Btn>
                <Btn
                $active = {activeBtn === "login"}
                onClick={() => isActiveBtn("login")}
                ><Link href='#'>login</Link></Btn>
            </Buttons>
            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoCloseOutline 
                // style={{fontSize: '18px'}} 
                className='icons'/> : <RxHamburgerMenu 
                className='icons'
                // style={{fontSize: '18px'}}
                />}
            </MobileIcon>
        </SubContainer>
    </MainContainer>

    {isOpen && (
        <MobileMenuSection>
            <MobileNavigations>
                <MobileListItem><Link href='#'>Home</Link></MobileListItem>
                <MobileListItem><Link href='#'>About</Link></MobileListItem>
                <MobileListItem><Link href='#'>Services</Link></MobileListItem>
                <MobileListItem><Link href='#'>Portfolio</Link></MobileListItem>
                <MobileListItem><Link href='#'>Career</Link></MobileListItem>
                <MobileListItem><Link href='#'>Contact</Link></MobileListItem>
                <MobileBtn><Link href='#'>Signup</Link></MobileBtn>
                <MobileBtn><Link href='#'>Login</Link></MobileBtn>
            </MobileNavigations>
        </MobileMenuSection>
    )}

    </>
  )
}

export default Navbar
