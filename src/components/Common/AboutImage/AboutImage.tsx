"use client"

import Image from 'next/image'
import React from 'react'
import { ImgProps } from './type'
import styled from 'styled-components'
import { ImageSection } from './style'

const AboutImage:React.FC<ImgProps> = ({image, border}) => {
  return (
    <ImageSection >
      <Image src={image} alt='#' className='image' style={{border: border}}/>
    </ImageSection>
  )
}

export default AboutImage

