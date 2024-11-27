"use client"

import React from 'react'
import { textProps } from './type'
import {Button1} from './style'

const PrimaryButton:React.FC<textProps> = ({text}) => {
  return (
    <Button1>{text}</Button1>
  )
}

export default PrimaryButton
