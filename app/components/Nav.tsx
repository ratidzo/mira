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
        <nav className="flex">
            <div>
                <h1> Logo </h1>
            </div>

            <ul className="flex gap-4 items-center z-100">
            {
                links.map((link) => (
                    <li key={link.id}> { link.title } </li>
                ))
            } 
            </ul>

            <Button text="Demo" />
        </nav>
    )
}
