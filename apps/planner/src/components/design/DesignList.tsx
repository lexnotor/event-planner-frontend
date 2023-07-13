"use client";
import useDesign from "@/hooks/useDesign";
import Image from "next/image";
import React from "react";

const DesignList = () => {
    const { designs } = useDesign();

    return (
        <div className="flex flex-wrap justify-start gap-2 [&>div]:h-48 [&>div]:grow [&>div]:shrink [&>div]:max-w-[30%] [&>div]:rounded-lg [&>div]:overflow-hidden [&>div]:bg-neutral-300">
            <div className="relative group">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2023/05/30/17/25/door-8029228_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
                <div className="absolute hidden w-full top-0 bottom-0 bg-neutral-700/30 duration-500 group-hover:flex flex-col justify-end text-white p-2">
                    <span>Invitation dîner</span>
                </div>
            </div>
            {designs.listDesign.map((design, index) => (
                <div className="relative group" key={index}>
                    <Image
                        alt="Montagne"
                        src={design.design_photo[0]?.photo.link}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute hidden w-full top-0 bottom-0 bg-neutral-700/30 duration-500 group-hover:flex flex-col justify-end text-white p-2">
                        <span>{design.text ?? ""}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DesignList;
