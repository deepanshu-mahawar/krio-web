"use client"

import Image from "next/image"
import logo from "@/assets/logo2.jpg"
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterFill } from "react-icons/ri"
import { FiInstagram } from "react-icons/fi"
import { BiLogoYoutube } from "react-icons/bi"
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FooterSection, LogoSection, Text, ParagraphSection, Text2, IconSection, Icons, LinkSection, 
    FooterForMobile, FollowIcons, NavLink1} from "./Style"
import NavLinks from "../Common/NavLinks/NavLinks";
import Link from "next/link";


const Footer = () => {
  return (
    <>
    <FooterSection>
        <LogoSection>
            <Image src={logo} alt="#" className="logo"></Image>
            <Text>Follow on</Text>
        </LogoSection>

        <ParagraphSection>
            <Text2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint unde veniam<br/>ratione exercitationem et earum eius dolor molestiae dolore!</Text2>
            <IconSection>
                <Icons href="#"><FaFacebookF className="icon"/></Icons>
                <Icons href="#"><RiTwitterFill className="icon"/></Icons>
                <Icons href="#"><FiInstagram className="icon"/></Icons>
                <Icons href="#"><BsEnvelopeFill className="icon"/></Icons>
                <Icons href="#"><BiLogoYoutube className="icon"/></Icons>
                <Icons href="#"><FaLinkedinIn className="icon"/></Icons>
            </IconSection>
        </ParagraphSection>

        <hr className="line"/>

        <LinkSection>
            <nav>
                <ul className="listItems">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </nav>             

            <nav>
                <ul className="listItems">
                    <li><a href="#">Privacy policy</a></li>
                    <li className="vl"><a href="#">Terms & condition</a></li>
                </ul>
            </nav>
            
            <p>Copyright &copy; 2024 Kriotek Systems, All Rights Reserved.</p>
        </LinkSection>
    </FooterSection>

    <FooterForMobile>
        <Link href="#" className="LogoLink">
        <Image src={logo} alt="" className="img"/>
        </Link>

        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta adipisci minus sint, numquam quis voluptatibus dolorem quisquam earum! Asperiores.</p>

        <p className="follow">Follow on</p>
        <FollowIcons>   
            <a href="#"><FaFacebookF className="icon"/></a>
            <a href="#"><RiTwitterFill className="icon"/></a>
            <a href="#"><FiInstagram className="icon"/></a>
            <a href="#"><BsEnvelopeFill className="icon"/></a>
            <a href="#"><BiLogoYoutube className="icon"/></a>
            <a href="#"><FaLinkedinIn className="icon"/></a>
        </FollowIcons>

        <NavLink1>
            <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms & condition</a></li>
            </ul>
        </NavLink1>  
        
        <p className="copyright">Copyright &copy; 2024 Kriotek Systems, All Rights Reserved.</p>
    </FooterForMobile>
    </>
  )
}

export default Footer
