import { StaticImageData } from "next/image";

export interface PortCardProps {
    bgImg : StaticImageData | string;
    watermark: string;
    title: string;
    desc: string;
}