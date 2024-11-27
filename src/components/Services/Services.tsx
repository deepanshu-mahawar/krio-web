"use client"

import line from "@/assets/line.jpg"
import Card2 from "../Common/Card2/Card2"
import { PortfolioSection, GridLayout } from "./Style";
import { TbDeviceMobileCode } from "react-icons/tb";
import { GiTechnoHeart } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import Text from "../Common/Text/Text";

const Services = () => {
  return (
    <PortfolioSection>

        <Text
        heading="SERVICES"
        subheading="
        Most experienced services"
        img={line}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, atque omnis ratione doloremque voluptatum reprehenderit, eum odit provident possimus eligendi excepturi repudiandae."
        />

        <GridLayout>
            <Card2 
            logo={TbDeviceMobileCode}
            title="Mobile App Development" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iste in laboriosam id quia, perspiciatis minus, voluptatibus dolore incidunt,Ea iste in laboriosam id doloribus autem!"/>
            <Card2
            logo={GiTechnoHeart} 
            title="AI development" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iste in laboriosam id quia, perspiciatis minus, voluptatibus dolore incidunt,Ea iste in laboriosam id doloribus autem!"/>
            <Card2
            logo={FaLaptopCode}
            title="Website development" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iste in laboriosam id quia, perspiciatis minus, voluptatibus dolore incidunt,Ea iste in laboriosam id doloribus autem!"/>
        </GridLayout>
    </PortfolioSection>
  )
}

export default Services

