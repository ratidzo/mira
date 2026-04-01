"use client"

import Button from "./UI/Button";
import Image from "next/image";
import Link from "next/link";
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
        <div className="p-[2px] bg-linear-to-r from-rose/50 to-dark-200/75 z-200 sticky top-0">
        <nav className="flex items-center gap-60 px-10 py-2 bg-white/75 backdrop-blur-lg z-200">
        <div className="flex gap-16">
            <Link href="/">
            <div className="flex gap-2 items-center">
                <Image alt="Mira logo" src="mira.svg" width="26" height="29" />
                <span className="font-brand text-[20px]">Mira</span>
            </div>
            </Link>

            <ul className="flex gap-12 items-center z-100">
            {
                links.map((link) => (
                    <li key={link.id} className="font-app text-[14px] font-medium"> { link.title } </li>
                ))
            } 
            </ul>
        </div>

            <Button text="Demo" />
        </nav>
        </div>
    )
}
