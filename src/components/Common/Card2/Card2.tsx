"use client"


import React from 'react'
import { ServiceCardProps } from './Type';
import { MainBox, LogoSection, Logos, Heading, Paragraph } from './style';

const Card2:React.FC<ServiceCardProps> = ({ logo: Logo, title, description }) => {
  return (
    <MainBox>
      <LogoSection>
        <Logos className='logohover'>
            <Logo className='logoImg'/>
        </Logos>
      </LogoSection>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </MainBox>
  )
}

export default Card2

