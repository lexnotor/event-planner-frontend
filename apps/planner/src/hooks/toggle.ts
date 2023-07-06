import { useState } from "react";

const useToggle = (defaultValue: boolean = false) => {
    const [value, changeValue] = useState(!!defaultValue || false);
    const toggle = () => changeValue((old) => !old);

    return [value, toggle];
};

export default useToggle;
