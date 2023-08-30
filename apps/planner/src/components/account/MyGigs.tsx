"use client";
import useMyGig from "@/hooks/useMyGig";
import { GigInfo } from "@/redux";
import { Tag } from "antd";
import React from "react";

const Item = ({ data }: { data: GigInfo }) => {
    return (
        <div className="p-4 rounded-lg shadow-lg flex flex-col gap-1">
            <header className="flex justify-between">
                <div>{data?.title ?? "loading ..."}</div>
                <Tag color="orange">{data?.type ?? "loading ..."}</Tag>
            </header>
            <hr />
            <article>
                <p>{data?.text ?? "loading ..."}</p>
            </article>
            {/* <hr /> */}
            <footer className="grid grid-cols-3 gap-2">
                <button className="hover:bg-gray-300 border mt-2 py-1 rounded-lg">
                    Supprimer
                </button>
                <button className="hover:bg-gray-300 border mt-2 py-1 rounded-lg">
                    Desactiver
                </button>
                <button className="hover:bg-gray-300 border mt-2 py-1 rounded-lg">
                    Modifier
                </button>
            </footer>
        </div>
    );
};

const MyGigs = () => {
    const { myGigList } = useMyGig();

    return (
        <div className="grid grid-cols-2 gap-4">
            {myGigList.map((gig) => (
                <Item key={gig?.id} data={gig} />
            ))}
        </div>
    );
};

export default MyGigs;
