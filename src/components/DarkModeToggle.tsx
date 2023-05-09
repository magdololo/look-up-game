import React, {useContext} from "react";
import { DarkModeToggle as DarkModeSwitcher } from "react-dark-mode-toggle-2";
import {ThemeContext} from "../ThemeContextProvider";

export const DarkModeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <DarkModeSwitcher
            className="toggle"
            onChange={toggleTheme}
            isDarkMode={theme === 'dark'}
        />
    );
};