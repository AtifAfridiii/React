import { useContext, createContext } from "react";

export const Thememode = createContext({
  theme: "light", 
  DarkTheme: () => {},
  LightTheme: () => {},
});


export const ThememodeProvider = ({ children, value }) => {
  return <Thememode.Provider value={value}>{children}</Thememode.Provider>;
};


export default function useTheme() {
  return useContext(Thememode);
}
