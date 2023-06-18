import React from "react";

const Post = () => {
    return (
        <div className="py-2 px-4 bg-purple-50 rounded-xl">
            <header className="flex gap-2 justify-between items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500" />
                <div className="">
                    <p className="font-semibold">Maison Pamba na Perle</p>
                    <p className="font-light text-neutral-700 text-xs">
                        12 Avr 2023
                    </p>
                </div>
                <div className="ml-auto">O</div>
            </header>
            <main></main>
            <footer></footer>
        </div>
    );
};

export default Post;
