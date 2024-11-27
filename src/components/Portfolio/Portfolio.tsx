"use client"

import Image from "next/image"
import line from "@/assets/line.jpg"
import background from "@/assets/background.jpg"
import background2 from "@/assets/background2.jpg"
import background3 from "@/assets/background3.png"
import background4 from "@/assets/background4.jpeg"
import { PortfolioSection, GridLayout, Button } from "../Portfolio/Style"
import PortfolioCard from "../Common/PortfolioCard/PortfolioCard"
import Text from "../Common/Text/Text"


const Portfolio = () => {
  return (
    <PortfolioSection>
        <Text
        heading="PORTFOLIO"
        subheading="our recently completed projects"
        img={line}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, atque omnis ratione doloremque voluptatum reprehenderit, eum odit provident possimus eligendi excepturi repudiandae."
        />

        <GridLayout>
            <PortfolioCard
            bgImg={background}
            watermark="Made by Kriotek"
            title="Branding"
            desc="Website"/>

            <PortfolioCard
            bgImg={background2}
            watermark="Made by Kriotek"
            title="Illustration"
            desc="Work Media"/>

            <PortfolioCard
            bgImg={background3}
            watermark="Made by Kriotek"
            title="Motion"
            desc="Dashboard"/>

            <PortfolioCard
            bgImg={background4}
            watermark="Made by Kriotek"
            title="Motion"
            desc="Mobile App"/>
        </GridLayout>

        <Button>Explore More</Button>
    </PortfolioSection>
  )
}

export default Portfolio

