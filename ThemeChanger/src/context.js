import { useContext, createContext  } from "react";

export  const Thememode = createContext({
    theme: 'light',
    DarkTheme: ()=>{},
    LightTheme: ()=>{}
})

export  const ThememodeProvider = Thememode.ThememodeProvider

export default  function useTheme (){
    return useContext(Thememode)
}