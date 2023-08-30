"use client";

import { ConfigProvider } from "antd";
import React from "react";

const AntConfig = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#9539f1",
                    colorTextBase: "#e8e8e8",
                },
                components: {
                    Modal: {
                        contentBg: "#32354b",
                        headerBg: "#32354b",
                        footerBg: "#32354b",
                        titleColor: "#e8e8e8",
                        colorText: "#e8e8e8",
                    },
                    Divider: {
                        colorText: "#e8e8e8",
                        colorSplit: "#e8e8e8",
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default AntConfig;
