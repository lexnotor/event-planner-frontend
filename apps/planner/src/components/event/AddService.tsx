"use client";
import React from "react";
import { Button } from "ui";
import { useNewEventContext } from "./context/NewEventContext";

const AddService = () => {
    const context = useNewEventContext();

    const submit = (type: (typeof context.services)[number]["type"]) => {
        context.addService({ details: "", supplier: "", type });
    };

    return (
        <div className="flex gap-2 flex-wrap">
            <Button size="small" onClick={() => submit("LAUNCH")}>
                + Repas
            </Button>
            <Button size="small" onClick={() => submit("MC")}>
                + Animation
            </Button>
            <Button size="small" onClick={() => submit("DECORATION")}>
                + Décoration
            </Button>
            <Button size="small" onClick={() => submit("SONORISATION")}>
                + Sonorisation
            </Button>
            <Button size="small" onClick={() => submit("ROOM")}>
                + Salle
            </Button>
            <Button size="small" onClick={() => submit("ORGANISATEUR")}>
                + Organisateur
            </Button>
            <Button size="small" onClick={() => submit("TRANSPORT")}>
                + Transport
            </Button>
            <Button size="small" onClick={() => submit("HABILLEMENT")}>
                + Habillement
            </Button>
            <Button size="small" onClick={() => submit("IMPRIMERIE")}>
                + Imprimerie
            </Button>
            <Button size="small" onClick={() => submit("LOCATION")}>
                + Location
            </Button>
        </div>
    );
};

export default AddService;
