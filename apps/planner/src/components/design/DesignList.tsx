"use client";
import Image from "next/image";
import React from "react";

const DesignList = () => {
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
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2023/06/04/15/51/mountains-8040132_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2023/05/30/17/25/door-8029228_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2017/02/24/21/00/door-2096367_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2023/06/04/15/51/mountains-8040132_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2015/01/15/16/16/staircase-600468_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2023/05/30/17/25/door-8029228_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="">
                <Image
                    alt="Montagne"
                    src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default DesignList;
