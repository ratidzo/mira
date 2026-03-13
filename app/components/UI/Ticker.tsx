"use client"

import { Children, ReactNode } from "react";

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
    gap = 64,
}: TickerProps) {

    const animationName = direction === "left" ? "ticker-left": "ticker-right";

    const items = Children.map(children, (child, index) => (
        <li key={index} className="flex items-center shrink-0 list-none "
            style={{ paddingLeft: `${gap}px`, paddingRight: `${gap}`}}>
            { child }
        </li>
    ))

    return (
        <div
            className="w-full overflow-hidden"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
            >
                <div 
                    className="w-max flex justify-center items-center gap-0"
                    style={{
                        animationName,
                        animationDuration: `${speed}s`,
                        animationTimingFunction: "linear",
                        animationIterationCount: "infinite",
                        animationPlayState: "running",
                    }}>
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