import { Children, createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={(theme, toggleTheme)}>
            {Children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error ('useTheme se utiliza dentro de ThemeProvider')
    }
    return context;
}

export {ThemeProvider, useTheme};