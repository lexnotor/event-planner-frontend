"use client";
import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";

const ImageUploader = forwardRef(function ImageUploader(
    _,
    ref: React.RefObject<{ file?: File }>
) {
    const [files, setFiles] = useState<File>(null);

    const inputFileHandle = (
        e:
            | React.DragEvent<HTMLLabelElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault();

        let newFile: File;
        if ("dataTransfer" in e) newFile = e.dataTransfer.files.item(0);
        else newFile = e.target.files.item(0);

        if (!/^image/i.test(newFile.type)) return alert("Please select image");
        setFiles(newFile);

        ref.current.file = newFile;
    };
    const preventDefaults: React.DragEventHandler<HTMLLabelElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    useEffect(() => {
        ref.current.file = null;
    }, [ref]);
    return (
        <label
            onDrop={inputFileHandle}
            onDragLeave={preventDefaults}
            onDragOver={preventDefaults}
            onDragEnter={preventDefaults}
            className="w-32 h-32 rounded-lg bg-neutral-100 flex justify-center items-center"
        >
            {files ? (
                <Image
                    width={128}
                    height={128}
                    src={URL.createObjectURL(files)}
                    alt="picture"
                />
            ) : (
                <span>add picture</span>
            )}
            <input type="file" hidden onChange={inputFileHandle} />
        </label>
    );
});

export default ImageUploader;
