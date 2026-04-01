"use client"

import Button from "./UI/Button";
import { useState } from "react";


const links = [
    {
        id: 1,
        title: "Pricing",
        url: "#"
    },
    {
        id: 2,
        title: "Product",
        url: "#"
    },
    {
        id: 3,
        title: "Company",
        url: "#"
    }
]

export default function Nav() {

    return (
        <nav className="flex items-center gap-40 border broder-2 px-10 py-2 bg-white/75 backdrop-blur-lg sticky top-0 z-200">
        <div className="flex gap-20">
            <div>
                <h1> Logo </h1>
            </div>

            <ul className="flex gap-12 items-center z-100">
            {
                links.map((link) => (
                    <li key={link.id}> { link.title } </li>
                ))
            } 
            </ul>
        </div>

            <Button text="Demo" />
        </nav>
    )
}
