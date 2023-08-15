"use client";
import React from "react";
import { Button } from "ui";
import { useNewEventContext } from "./context/NewEventContext";

const AddService = () => {
    const context = useNewEventContext();

    const submit = () => {
        context.addService({ details: "", supplier: "", type: "LAUNCH" });
    };

    return (
        <div className="flex gap-2 flex-wrap" onClick={submit}>
            <Button size="small">+ Repas</Button>
            <Button size="small">+ Animation</Button>
            <Button size="small">+ Décoration</Button>
            <Button size="small">+ Sonorisation</Button>
            <Button size="small">+ Salle</Button>
            <Button size="small">+ Organisateur</Button>
            <Button size="small">+ Transport</Button>
            <Button size="small">+ Habillement</Button>
            <Button size="small">+ Imprimerie</Button>
            <Button size="small">+ Location</Button>
        </div>
    );
};

export default AddService;
