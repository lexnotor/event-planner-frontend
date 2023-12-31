"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "ui";

const SearchBar = () => {
    const submitHandle: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    };

    const { isLogin } = useAuth();

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <form
                    onSubmit={submitHandle}
                    className="w-80 bg-white border overflow-hidden rounded-r-full rounded-l-full"
                >
                    <label className="w-full h-full px-4 py-1 flex gap-4 cursor-text item-center">
                        <span className="text-xl text-neutral-500">
                            <AiOutlineSearch className="!align-middle inline" />
                        </span>
                        <input
                            type="search"
                            className="focus:outline-none bg-transparent"
                            placeholder="Recherche ..."
                        />
                    </label>
                </form>

                {isLogin ? (
                    <div>
                        <Link href="/event/n">
                            <Button size="small">Planifier</Button>
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
