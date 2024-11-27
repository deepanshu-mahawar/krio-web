"use client"

import styled from "styled-components"
import { GoArrowDownRight } from "react-icons/go";
import { HeadingSection, Heading, Span, Paragraph, Button } from "../Banner/Style";

const Banner = () => {
  return (
    <section className="banner">
        <HeadingSection>
            <Heading>
                <Span>Creating </Span>
                Special <br/>things 
                <Span> for whole world</Span>
            </Heading>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea placeat, deleniti unde eligendi aliquam, maxime<br/> ducimus, libero omnis perferendis nam iure expedita et maiores magnam? Corrupti quae.</Paragraph>
            <Button>Explore more<GoArrowDownRight /></Button>
        </HeadingSection>
    </section>
  )
}

export default Banner

