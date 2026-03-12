"use client"

import Image from "next/image";
import {useRef, useState, useEffect} from "react";


export default function HeroSection() {

    const [currentContainerWidth, setCurrentContainerWidth] = useState(0);
    const containerRef = useRef(null);
    const panelWidth = 40; // using a fixed value here.
    const panelOverlap = 16; // layered glass effect.
    const panelCount = Math.floor(currentContainerWidth / (panelWidth - panelOverlap));




    return (
        <section className="relative flex w-full h-full justify-center items-center overflow-x-hidden bg-white select-none">
            <Image width={260} height={200} src={"/Left.png"} alt="left image" className="absolute z-0 left-[10%] top-[10%]" />
            <Image width={229} height={420} src={"/Middle.png"} alt="middle image" className="absolute z-0 left-[40%] top-[55%]" />
            <Image width={229} height={420} src={"/Right.png"} alt="right image" className="absolute z-0 right-[20%] top-[10%]" />

            {/*Blobs*/}
            <Image width={120} height={120} src={"/Skyblue Blob.svg"} alt="left blob" className="absolute z-0 left-[30%] top-[20%]" />
            <Image width={120} height={120} src={"/Black Blob.svg"} alt="middle blob" className="absolute z-0 left-[55%] top-[70%]" />
            <Image width={120} height={120} src={"/Pink Blob.svg"} alt="right blob" className="absolute z-0 right-[10%] top-[20%]" />

        </section>
    )
}