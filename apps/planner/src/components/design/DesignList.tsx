"use client";
import useDesign from "@/hooks/useDesign";
import Image from "next/image";
import React from "react";

const DesignList = () => {
    const { designs } = useDesign();

    return (
        <div className="flex flex-wrap justify-start gap-4 [&>div]:h-48 [&>div]:grow [&>div]:shrink [&>div]:max-w-[30%] [&>div]:rounded-lg [&>div]:overflow-hidden [&>div]:bg-neutral-300">
            {designs.listDesign.map((design, index) => (
                <div className="relative group" key={index}>
                    <Image
                        alt="Montagne"
                        src={design.design_photo[0]?.photo.link}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute hidden w-full top-0 bottom-0 from-neutral-900 bg-opacity-25 bg-gradient-to-t from-5%  cursor-pointer transition-[display] duration-500 group-hover:flex flex-col justify-end text-white p-2">
                        <span>{design.text ?? ""}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DesignList;
