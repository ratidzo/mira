"use client"

import { Children, ReactNode, useState } from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface TickerProps {
    children: ReactNode;
    speed?: number;
    direction?: "left" | "right";
    pauseOnHover? : boolean;
    gap?: number;
}

export default function Ticker({
    children,
    speed = 20,
    direction = "left",
    pauseOnHover = false,
    gap = 64,
}: TickerProps) {

    const [isPaused, setIsPaused] = useState(false);
    const animationName = direction === "left" ? "ticker-left": "ticker-right";

    const items = Children.map(children, (child, index) => (
        <li key={index} className="flex items-center shrink-0 list-none "
            style={{ paddingLeft: `${gap}px`, paddingRight: `${gap}`}}>
            { child }
        </li>
    ))

    const handleMouseEnter = () => {

        console.log("Mouse enter ")

        if(pauseOnHover) {
            setIsPaused(true);
        }
    }

    const handleMouseLeave = () => {
        console.log("Mouse leave")

        if(pauseOnHover) {
            setIsPaused(false);
        }
    }

    return (
        <div
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
