"use client";
import { Tag } from "antd";
import React from "react";

const Item = () => {
    return (
        <div className="p-4 rounded-lg shadow-lg flex flex-col gap-1">
            <header className="flex justify-between">
                <div>LOCATION DE TENTES 10$ et 15$</div>
                <Tag color="orange">LOCATION</Tag>
            </header>
            <hr />
            <article>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut sint minus officiis tenetur, optio ipsam iure aspernatur
                    quia corporis facilis provident possimus sunt illum. Dolore,
                    ipsam velit. Hic, modi accusantium.
                </p>
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
    return (
        <div className="grid grid-cols-2 gap-4">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};

export default MyGigs;
