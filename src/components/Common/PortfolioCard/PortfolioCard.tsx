"use client"

import Image from 'next/image'
import React from 'react'
import { PortCardProps } from './type'
import { CardSection, ImageBox, Watermark, ContentDiv, TextDiv, Text, Button } from './style'

const PortfolioCard:React.FC<PortCardProps> = ({bgImg, watermark, title, desc}) => {
  return (
    <CardSection>
      <ImageBox>
        <Image src={bgImg} alt={title} layout='fill' objectFit='cover' className="bgImg"></Image>
      </ImageBox>

      {watermark && (
        <Watermark>{watermark}</Watermark>
      )}
      <ContentDiv>
        <TextDiv>
            <Button>{title}</Button>
            <Text>{desc}</Text>
        </TextDiv>
      </ContentDiv>
    </CardSection>
  )
}

export default PortfolioCard
