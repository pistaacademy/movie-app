import React, {createContext} from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const sepide = () => {
        console.log("This is from sepide method")
    }
    return (
        <ThemeContext.Provider value={{theme: "for test context", sepide}}>
            {children}
        </ThemeContext.Provider>
    )
}