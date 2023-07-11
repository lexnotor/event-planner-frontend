import React from "react";
import { Button } from "ui";

const TagList = () => {
    return (
        <ul className="flex justify-between" style={{ fontSize: "85%" }}>
            <li>
                <Button size="small">Mariage</Button>
            </li>
            <li>
                <Button size="small">Birthday</Button>
            </li>
            <li>
                <Button size="small">Conférence</Button>
            </li>
            <li>
                <Button size="small">Concert</Button>
            </li>
            <li>
                <Button size="small">Autres</Button>
            </li>
            <li>
                <Button size="small">Tout</Button>
            </li>
        </ul>
    );
};

export default TagList;
