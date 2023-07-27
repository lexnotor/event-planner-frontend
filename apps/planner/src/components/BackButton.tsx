"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "ui";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button size="small" onClick={() => router.back()}>
            Retour
        </Button>
    );
};

export default BackButton;
