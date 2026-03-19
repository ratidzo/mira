"use client"

import { Children, ReactNode, useState,  useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface TickerProps {
    children: ReactNode;
    speed?: number;
    direction?: "left" | "right";
    hoverInteractions? : boolean;
    hoverTimeStretch? : number;
    pauseOnHover? : boolean;
    gap?: number;
}

export default function Ticker({
    children,
    speed = 50,
    direction = "left",
    hoverInteractions = false,
    hoverTimeStretch = 0.5,
    pauseOnHover = false,
    gap = 64,
}: TickerProps) {
    
    const [running, setRunning] = useState(true)
    const parentRef = useRef(null);
    const tickerAnimationRef = useRef<gsap.core.Tween | null>(null);
    const tickerRef = useRef(null);

    const xDirection = direction === "left"? "-50%": "50%";

    useGSAP(() => {
        tickerAnimationRef.current = gsap.to(
            tickerRef.current, {
                x: xDirection,
                duration: speed,
                repeat: -1, // repeat infinite
                ease: "linear"
            })
    })
    
    const items = Children.map(children, (child, index) => (
        <li key={index} className="flex items-center shrink-0 list-none "
            style={{ paddingLeft: `${gap}px`, paddingRight: `${gap}`}}>
            { child }
        </li>
    ))

    const handleMouseEnter = () => {
        // decide what to do based on whether or not hover interactions are enabled.
        if(hoverInteractions) {
           if(pauseOnHover) {
               tickerAnimationRef.current?.paused(true)
           } else {
               tickerAnimationRef.current?.timeScale(hoverTimeStretch)
           }
        } else {
                tickerAnimationRef.current?.paused(false)
        }

        console.log("Mouse enter ")
    }

    const handleMouseLeave = () => {
        tickerAnimationRef.current?.paused(false)
        tickerAnimationRef.current?.timeScale(1)
        console.log("Mouse leave")
        }

    return (
        <div ref={ parentRef }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex relative w-full overflow-hidden backface-hidden py-10 ${hoverInteractions? "hover:cursor-pointer": "hover:cursor-default"}`}
            style={{
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
            >
                <div ref={tickerRef} className={`flex w-max translate-x-[${direction==="left" ? 0 : -50}%]`} // make a -50% layout transform correction for rightward animations.
                >
                       <ul className="flex w-max items-center"
                        style={{ gap: `${gap}px`
                        }} 
                       >
                            { items }
                       </ul>
                       <ul className="flex w-max items-center aria-hidden"
                        style={{ gap: `${gap}px`}}
                       >
                            { items }
                       </ul>
                </div>
        </div>
    )
}
