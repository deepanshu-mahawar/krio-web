"use client"

import Image from 'next/image'
import React from 'react'
import line from '@/assets/line.jpg'
import { Text2Props } from './type'
import { MainSection, HeadingDiv, Heading, SubHeading, Paragraph, Button } from './style'

const Text2:React.FC<Text2Props> = ({title, heading, desc, button, leftline = true, rightline = true}) => {
  return (
    <MainSection>
        <HeadingDiv>
            {leftline && <hr className='headline'/>}
            <Heading>{title}</Heading>
            {rightline && <hr className='headline'/>}
        </HeadingDiv>
        <SubHeading>{heading}</SubHeading>
        <Image src={line} alt='#' className='divider'/>
        <Paragraph>{desc}</Paragraph>
        {button && <Button>{button}</Button>}
    </MainSection>
  )
}

export default Text2

