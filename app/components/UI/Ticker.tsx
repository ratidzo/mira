"use client"

import { ReactNode, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface TickerProps {
    children: ReactNode;
    speed?: number;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
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
    const controls = useAnimationControls();

    const from = direction === "left" ? "0%" : "-50%";
    const to = direction === "left" ? "-50%" : "0%";

    useEffect(() => {
        if(isPaused) {
            controls.stop();
        } else {
            controls.start({
                x: [from, to],
                transition: {
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                },
            });
        }
    }, [isPaused, from, to, speed, controls]);

    return (
        <div 
            className="w-full overflow-hidden"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent",
                backdropFilter: "blur(4px)",
            }}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            <motion.div
                className="flex items-center"
                style={{ gap: `${gap}px` }}
                animate={controls}>
                    { children }
                    { children }
                </motion.div>
        </div>
    )
}