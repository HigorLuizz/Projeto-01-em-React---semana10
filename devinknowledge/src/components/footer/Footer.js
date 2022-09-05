import { useTheme } from "../../contexts/ThemeContext"


export default function Footer(){
    const {setTheme} = useTheme()
    return(
        <div id="footer">
            <button onClick={() =>{
                setTheme('LightMode')
            }}>Light mode</button>
            <button onClick={() =>{
                setTheme('DarkMode')
            }}>Dark mode</button>
        </div>
    )
}