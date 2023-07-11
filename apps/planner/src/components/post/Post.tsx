"use client";

import { PostInfo } from "@/redux";
import { Popover } from "antd";
import Image from "next/image";
import { RiMore2Fill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BsBookmarkCheck } from "react-icons/bs";

const Post = ({ postData }: { postData?: PostInfo }) => {
    return (
        <div className="py-4 px-8 bg-white rounded-xl flex flex-col gap-4 max-w-[35rem] w-full mx-auto border">
            <header className="flex gap-2 justify-between items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500" />
                <div className="">
                    <p className="font-semibold">{postData?.author}</p>
                    <p className="font-light text-neutral-700 text-xs">
                        {new Date(postData.date).toDateString()}
                    </p>
                </div>
                <Popover
                    trigger={"click"}
                    arrow={false}
                    content={
                        <ul className="flex flex-col w-40 [&>li:hover]:bg-slate-50 [&>li]:py-2 [&>li]:cursor-pointer">
                            <li>Enregistrer</li>
                            <li>Contacter</li>
                            <li>Prestataire</li>
                        </ul>
                    }
                    destroyTooltipOnHide
                    placement="bottomRight"
                >
                    <div className="ml-auto cursor-pointer text-xl hover:text-purple-400 transition-colors duration-500 rounded-full">
                        <RiMore2Fill />
                    </div>
                </Popover>
            </header>
            <main>
                <p>{postData?.text}</p>
                <div className="flex justify-center gap-4 mt-4">
                    {postData.post_photo.map((photo) => (
                        <Image
                            width={500}
                            height={200}
                            alt="Photo"
                            src={photo?.photo?.link}
                            key={photo?.id}
                            className="rounded-lg !max-h-[20rem] w-full aspect-video object-cover inline-block"
                        />
                    ))}
                    {/* <span className="basis-1/2 h-44 bg-neutral-300 rounded-xl"></span>
                    <span className="basis-1/2 h-44 bg-neutral-300 rounded-xl"></span> */}
                </div>
            </main>
            <footer className="border-t min-h-[2rem] flex [&>div]:basis-1/4 [&>div]:justify-center [&>div]:duration-500 items-end">
                <div className="flex gap-1 cursor-pointer hover:bg-neutral-200">
                    <span className="text-xl">
                        <BiLike />
                    </span>
                    <span>2k</span>
                </div>
                <div className="flex gap-1 cursor-pointer hover:bg-neutral-200">
                    <span className="text-xl">
                        <BiLike />
                    </span>
                    <span>2k</span>
                </div>
                <div className="flex gap-1 cursor-pointer hover:bg-neutral-200">
                    <span className="text-xl">
                        <BiLike />
                    </span>
                    <span>2k</span>
                </div>
                <div className="flex gap-1 cursor-pointer hover:bg-neutral-200">
                    <span className="text-xl">
                        <BsBookmarkCheck />
                    </span>
                    <span>2k</span>
                </div>
            </footer>
        </div>
    );
};

export default Post;