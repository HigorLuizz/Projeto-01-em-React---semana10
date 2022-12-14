import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState('LightMode')
    console.log(theme)
    return(
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme = ()=> {
    return useContext(ThemeContext)
}
export {ThemeProvider,useTheme}