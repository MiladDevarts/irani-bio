"use client"

import React, { useEffect, useState } from "react";

export const ThemeColorContext = React.createContext();

export function ThemeColorProvider({ children }) {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(isDark)
    }, isDark)

    return (
        <ThemeColorContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeColorContext.Provider>
    );
}

export default ThemeColorProvider;
