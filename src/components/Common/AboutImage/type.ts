import { StaticImageData } from "next/image";

export interface ImgProps{
    image: StaticImageData | string;
    border?: string;
}