"use client"

import Image from "next/image";
import {useRef, useState, useEffect} from "react";
import Button from "./UI/Button";
import Ad from "./media/Ad";


export default function HeroSection() {

    const [currentContainerWidth, setCurrentContainerWidth] = useState(0);
    const containerRef = useRef(null);
    const panelWidth = 40; // using a fixed value here.
    const panelOverlap = 16; // layered glass effect.
    const panelCount = Math.floor(currentContainerWidth / (panelWidth - panelOverlap));

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setCurrentContainerWidth(entry.contentRect.width)
            }
        });
        observer.observe(containerRef.current);

        // Cleanup
        return () => observer.disconnect();
    }, []);


    return (
        <section ref={containerRef} className="relative flex flex-col h-216 w-full justify-center items-center overflow-x-hidden bg-white select-none">
            <Image width={260} height={200} src={"/Left.png"} alt="left image" className="absolute z-0 left-[10%] top-[10%]" />
            <Image width={229} height={420} src={"/Middle.png"} alt="middle image" className="absolute z-0 left-[40%] top-[55%]" />
            <Image width={229} height={420} src={"/Right.png"} alt="right image" className="absolute z-0 right-[20%] top-[10%]" />

            {/*Blobs*/}
            <Image width={120} height={120} src={"/Skyblue Blob.svg"} alt="left blob" className="absolute z-0 left-[30%] top-[20%]" />
            <Image width={120} height={120} src={"/Black Blob.svg"} alt="middle blob" className="absolute z-0 left-[55%] top-[70%]" />
            <Image width={120} height={120} src={"/Pink Blob.svg"} alt="right blob" className="absolute z-0 right-[10%] top-[20%]" />

            { Array.from({length: panelCount}).map((_, index) => (
                <div key={index}
                style={{
                    position: "absolute",
                    left: `${index * (panelWidth - panelOverlap)}px`,
                    width: `${panelWidth}px`,
                    zIndex: index
                }}
                className="h-216 bg-linear-to-b from-white/0 to-gray-200/25 backdrop-blur-sm" />
            )) }


        <div className="z-100 flex flex-col gap-35 items-center">
            <div className="flex flex-col items-center" >
                <h1 className="text-[100px] text-black font-brand tracking-tight">Let them look in the mirror</h1>
                <p className="font-brand text-xl text-dark-500 w-160">Meet your Mira, a try-on platform for e-commerce vendors that let your customers visualize their new look right in store - with AI.</p>
            </div>

            <div className="flex flex-col items-center gap-12.5">
                <p className="text-[16px] font-brand text-dark-500">Ready to supercharge your conversions?</p>

                <div className="flex flex-col items-center gap-5">
                    <Button text="Book a free demo"/>
                    <p className="text-xs font-app font-bold text-dark-900">No credit card required.</p>
                </div>
            </div>
        </div>
        </section>
    )
}