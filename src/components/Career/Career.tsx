"use client"

import career from "@/assets/career.jpg"
import line from "@/assets/line.jpg"
import Text from "@/components/Common/Text/Text"
import { CareerSection, TextSection } from "./Style"
import AboutImage from "../Common/AboutImage/AboutImage"
import Button from "../Common/Button/Button"
import Text2 from "../Common/Text2/Text2"


const Career = () => {
  return (
    <CareerSection>

        <AboutImage image={career}/>

        <TextSection>

            <Text2
            title="CAREER"
            heading="Several Things Define Us As a Company"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in neque quo dolore, odio minima ab commodi non velit voluptatum aut culpa praesentium optio inventore autem fugit enim at nisi nemo quod veniam amet? Vel adipisci reprehenderit maxime, ut alias voluptates ipsa et maiores commodi illum temporibus rerum quas excepturi facere. Ratione alias aliquid quam cupiditate, harum aut, dolorem rem tenetur dolore eveniet eligendi iste? Harum esse minima hic explicabo vel quasi, voluptatem consectetur ad illo, atque incidunt a natus ut magni corrupti dolore debitis reprehenderit omnis, est saepe quis."
            button="Explore More"
            leftline={false}
            />

        </TextSection>

    </CareerSection>
  )
}

export default Career

