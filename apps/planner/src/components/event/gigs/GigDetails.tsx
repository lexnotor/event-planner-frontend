"use client";
import { EventGigInfo } from "@/redux";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const GigDetails = ({ eventGig }: { eventGig?: EventGigInfo }) => {
    return (
        <article className="flex gap-2 max-h-40 bg-[#6b718d]/10 rounded-lg py-2">
            <div className="border-r-2 grid grid-rows-2 text-2xl px-2">
                <span className="my-auto cursor-pointer">
                    <BiEdit />
                </span>
                <span className="hover:text-red-700 cursor-pointer my-auto">
                    <RiDeleteBin6Line />
                </span>
            </div>
            <div className="py-3 pr-5 flex flex-col gap-2 overflow-y-auto">
                <h3>
                    <span className="font-bold">{eventGig?.title}</span>
                    <span className="text-[80%] text-primary-700">
                        (SERVICE LAUNCH)
                    </span>
                </h3>
                <p>{eventGig?.details}</p>
            </div>
        </article>
    );
};

export default GigDetails;
