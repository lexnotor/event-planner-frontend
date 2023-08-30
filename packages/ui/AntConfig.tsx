"use client";

import { ConfigProvider } from "antd";
import React from "react";

const AntConfig = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#9539f1",
                    colorTextBase: "#1d1c1c",
                },
                components: {
                    Modal: {
                        contentBg: "#32354b",
                        headerBg: "#32354b",
                        footerBg: "#32354b",
                        titleColor: "#ffffff",
                        colorText: "#ffffff",
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default AntConfig;
