"use client";

import { Popover } from "antd";
import { RiMore2Fill } from "react-icons/ri";

const Post = () => {
    return (
        <div className="py-4 px-8 bg-white rounded-xl flex flex-col gap-4">
            <header className="flex gap-2 justify-between items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500" />
                <div className="">
                    <p className="font-semibold">Maison Pamba na Perle</p>
                    <p className="font-light text-neutral-700 text-xs">
                        12 Avr 2023
                    </p>
                </div>
                <Popover
                    trigger={"click"}
                    content={<div>Actions</div>}
                    destroyTooltipOnHide
                >
                    <div className="ml-auto cursor-pointer text-xl hover:text-purple-400 transition-colors duration-500 rounded-full">
                        <RiMore2Fill />
                    </div>
                </Popover>
            </header>
            <main>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                </p>
                <div className="flex gap-4 mt-4">
                    <span className="basis-1/2 h-44 bg-neutral-300 rounded-xl"></span>
                    <span className="basis-1/2 h-44 bg-neutral-300 rounded-xl"></span>
                </div>
            </main>
            <footer className="border-t min-h-[2rem]">
                <div></div>
                <div></div>
            </footer>
        </div>
    );
};

export default Post;
