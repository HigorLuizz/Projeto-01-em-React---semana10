import { createContext, useContext, useState } from "react";

const TipContext = createContext()
const TipProvider = ({children}) =>{
    const [tipList, setTipList] = useState([])
    return(
        <TipContext.Provider value={{
            tipList,
            setTipList
        }}>
            {children}
        </TipContext.Provider>
    )
}

const useTips = () => {
    return useContext(TipContext)
}
export {TipProvider, useTips}