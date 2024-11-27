"use client"

import Image from 'next/image'
import React from 'react'
import contactImage from '@/assets/contact.jpg'
import { 
    MainSection, 
    ShadowDiv, 
    TextSection, 
    Heading, 
    Paragraph, 
    Section, 
    Form, 
    FormSection,
    Label, 
    InputField,
    MessageSection, 
    TextArea, 
    TextAreaLabel, 
    Button, 
    ImageSection 
} from './style'


const GetInTouch = () => {
  return (
    <MainSection>
    <ShadowDiv>
    <Section>
    <TextSection>
        <Heading>Get in touch</Heading>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus accusamus quis mollitia ullam, doloribus dignissimos totam iusto pariatur placeat?</Paragraph>
        
        <Form>
            <FormSection>
            <Label htmlFor="">Name</Label>
            <InputField type="text" placeholder="Deepanshu Mahawar"/>
            </FormSection>

            <FormSection>
            <Label htmlFor="">Email</Label>
            <InputField type="email" placeholder="example@gmail.com" />
            </FormSection>
        </Form>

        <MessageSection>
            <TextAreaLabel htmlFor="">Message</TextAreaLabel>
            <TextArea name="" id="" placeholder="Write here..." rows={6} ></TextArea>
        </MessageSection>

        <Button>Submit</Button>
    </TextSection>
    <ImageSection>
    <Image src={contactImage} alt="#" style={{borderTopRightRadius: '55px', borderBottomRightRadius: '55px', height: "100%"}}></Image>
    </ImageSection>
</Section>
</ShadowDiv>
</MainSection>
  )
}

export default GetInTouch

