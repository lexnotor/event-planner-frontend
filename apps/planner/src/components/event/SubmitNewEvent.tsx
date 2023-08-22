"use client";
import React from "react";
import { useNewEventContext } from "./context/NewEventContext";
import { Button } from "ui";

const SubmitNewEvent = () => {
    const context = useNewEventContext();
    const submit = () => {
        const lieu = context.LocationRef.current.value;
        const date = context.dateRef.current.value;
        const description = context.descriptionRef.current.value;
        const title = context.titleRef.current.value;
        const services = context.services;

        alert({ lieu, date, description, title, services });
    };
    return (
        <Button onClick={submit} active>
            Enregister
        </Button>
    );
};

export default SubmitNewEvent;
