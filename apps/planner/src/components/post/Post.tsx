"use client";

import { PostInfo } from "@/redux";
import { Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BiComment, BiLike } from "react-icons/bi";
import { BsBookmarkCheck } from "react-icons/bs";
import { RiMore2Fill } from "react-icons/ri";

const Post = ({ postData }: { postData?: PostInfo }) => {
    return (
        <div className="py-4 px-8 bg-[#6b718d]/10 rounded-xl flex flex-col gap-4 max-w-[38rem] w-full mx-auto shadow-lg">
            <header className="flex gap-2 justify-between items-center">
                <div className="w-10 h-10 rounded-full bg-white cursor-pointer" />
                <div className="">
                    <p className="font-semibold cursor-pointer">
                        {postData?.author}
                    </p>
                    <p className="font-light text-neutral-100 text-xs">
                        {new Date(postData.date).toDateString()}
                    </p>
                </div>
                <Popover
                    overlayInnerStyle={{ padding: 0, overflow: "hidden" }}
                    trigger={"click"}
                    arrow={false}
                    content={
                        <ul className="flex flex-col w-40 [&>li:hover]:bg-slate-50 [&>li]:py-2 [&>li]:px-4 [&>li]:cursor-pointer">
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
            <footer className=" min-h-[2rem] flex gap-4 [&>*]:basis-1/4  [&>*]:rounded-r-full  [&>*]:rounded-l-full [&>*]:justify-center items-end">
                <Link
                    className="flex gap-1 cursor-pointer hover-degrade py-1 px-2 border border-blue-400/20"
                    href={`/p?post=${postData.id}`}
                    scroll={true}
                >
                    <span className="text-xl">
                        <BiComment />
                    </span>
                    <span>2k</span>
                </Link>
                <div className="flex gap-1 cursor-pointer hover-degrade py-1 px-2 border border-blue-400/20">
                    <span className="text-xl">
                        <BiLike />
                    </span>
                    <span>2k</span>
                </div>
                <div className="flex gap-1 cursor-pointer hover-degrade py-1 px-2 border border-blue-400/20">
                    <span className="text-xl">
                        <BiLike />
                    </span>
                    <span>2k</span>
                </div>
                <div className="flex gap-1 cursor-pointer hover-degrade py-1 px-2 border border-blue-400/20">
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
