import { StaticImageData } from "next/image";

export interface TextProps{
    heading: string;
    subheading: string;
    img: StaticImageData | string;
    desc: string;
    button?: string;
    leftline?: boolean;
    rightline?: boolean;
}