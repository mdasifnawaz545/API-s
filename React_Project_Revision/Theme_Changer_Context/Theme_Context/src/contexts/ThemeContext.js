import React, { useContext } from 'react'

const ThemeContext = React.createContext(
    {
        theme: "light",
        lightTheme() { },
        darkTheme() { }
    }
);

const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}

export { ThemeContext, ThemeProvider };