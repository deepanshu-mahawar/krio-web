"use client"

import React from 'react'
import AboutImage from '../Common/AboutImage/AboutImage'
import Text from '../Common/Text/Text'
import About from "@/assets/about.jpg"
import { AboutSection, TextSection } from './style'
import line from "@/assets/line.jpg"
import Text2 from '../Common/Text2/Text2'

const AboutUs = () => {
  return (
    <AboutSection>

        <AboutImage image={About}/>

        <TextSection>

            <Text2 
            title='ABOUT US'
            heading='Creative & Modern agency'
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in neque quo dolore, odio minima ab commodi non velit voluptatum aut culpa praesentium optio inventore autem fugit enim at nisi nemo quod veniam amet? Vel adipisci reprehenderit maxime, ut alias voluptates ipsa et maiores commodi illum temporibus rerum quas excepturi facere. Ratione alias aliquid quam cupiditate, harum aut, dolorem rem tenetur dolore eveniet eligendi iste? Harum esse minima hic explicabo vel quasi, voluptatem consectetur ad illo, atque incidunt a natus ut magni corrupti dolore debitis reprehenderit omnis, est saepe quis."
            button="Explore More"
            leftline={false}
            />
            
        </TextSection>
    </AboutSection>
  )
}

export default AboutUs


