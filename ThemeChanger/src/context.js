import { useContext, createContext  } from "react";

const Thememode = createContext({
    theme: 'light',
    DarkTheme: ()=>{},
    LightTheme: ()=>{}
})


