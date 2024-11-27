"use client"

import Image from 'next/image'
import React from 'react'
import { TextProps } from './type'
import {
  TextSection, 
  HeadingSection, 
  Heading, 
  SubHeading, 
  Description, 
  Button, 
} from './style'

const Text:React.FC<TextProps> = ({
  heading, 
  subheading, 
  img, 
  desc, 
  button, 
  rightline = true, 
  leftline = true,
  }) => {
    
  return (
    <TextSection>
      <HeadingSection>
        { leftline && <hr className='hr'/> }
        <Heading>{heading}</Heading>
        { rightline && <hr className='hr'/> }
      </HeadingSection>

      <SubHeading>{subheading}</SubHeading>
      <Image src={img} alt={heading} className='divider'/>
      <Description 
      >{desc}</Description>
      {button && <Button>{button}</Button>}
    </TextSection>
  )
}

export default Text
