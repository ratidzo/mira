"use client"

import { Children, ReactNode, useState, useLayoutEffect, useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface TickerProps {
    children: ReactNode;
    speed?: number;
    direction?: "left" | "right";
    hoverInteraction? : boolean;
    hoverTimeStretch? : number;
    gap?: number;
}

export default function Ticker({
    children,
    speed = 20,
    direction = "left",
    pauseOnHover = false,
    gap = 64,
}: TickerProps) {
    
    const [xDistance, setXDistance] = useState(0);
    const parentRef = useRef(null);

    useLayoutEffect(() => {
        if (!parentRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setXDistance(entry.contentRect.width);
            }
        });
        observer.observe(parentRef.current);
        console.log("Animation parent container width: ", xDistance);
        return () => observer.disconnect();
    }, [xDistance]);

    // speed in px/sec. start with any abitrary value then adjust.
    const xTranslationSpeed = 50; // pixels per second.
    
    const items = Children.map(children, (child, index) => (
        <li key={index} className="flex items-center shrink-0 list-none "
            style={{ paddingLeft: `${gap}px`, paddingRight: `${gap}`}}>
            { child }
        </li>
    ))

    const handleMouseEnter = () => {

        console.log("Mouse enter ")
        
    }

    const handleMouseLeave = () => {
        console.log("Mouse leave")

        }
    

    return (
        <div ref={ parentRef }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full overflow-hidden py-10 hover:cursor-pointer"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
            >
                <div className="w-max flex justify-center items-center gap-0 ">
                       <ul className="flex w-full items-center"
                        style={{ gap: `${gap}px`}}
                       >
                            { items }
                       </ul>
                       <ul className="flex w-full items-center"
                        style={{ gap: `${gap}px`}}
                       >
                            { items }
                       </ul>
                </div>
        </div>
    )
}
