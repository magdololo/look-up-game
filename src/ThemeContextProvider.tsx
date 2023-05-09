import React, {ReactNode, useState} from "react";
import {ThemeProvider, createTheme} from "@mui/material";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

interface ThemeProviderProps {
    children?: ReactNode;
}


export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const color = theme === "light" ? "gray" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "#333";

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        }
    })

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={muiTheme}>
            {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};