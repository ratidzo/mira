"use client";

import zara from "@/public/zara.svg";
import lvhm from "@/public/louis vuitton.svg"
import skims from "@/public/skims.svg"
import alo from "@/public/alo.svg"
import gymshark from "@/public/gymshark.svg"
import chanel from "@/public/chanel.svg"

import Image from "next/image";
import Ticker from "./UI/Ticker";


export default function BrandsSection() {

    return (
       <div className="bg-dark-900 w-full flex flex-col justify-center items-center pt-16  pb-20 gap-10">
        <h1 className="font-brand text-lg text-white">Trusted by the best in e-commerce:</h1>
        <Ticker gap={80} speed={20} direction="left" hoverInteractions hoverTimeStretch={0.3}>
            <Image src={lvhm} alt="Louis Vuitton logo" height={24} width={230}/>
            <Image src={gymshark} alt="Gymshark logo" height={24} width={144} />
            <Image src={skims} alt="Skims logo" height={28} width={126} />
            <Image src={chanel} alt="Chanel logo" height={24} width={152} />
            <Image src={alo} alt="Alo logo" height={40} width={59} />
            <Image src={zara} alt="Zara logo" height={24} width={102} />
        </Ticker> 
       </div> 
    )
}
