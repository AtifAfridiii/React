import { useEffect, useState } from "react";
import { ThememodeProvider } from "./context";
import React from "react";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";

function App() {
  const [theme, setTheme] = useState("light");

  function LightTheme() {
    setTheme("light");
  }

  function DarkTheme() {
    setTheme("dark");
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [theme]);

  return (
    <ThememodeProvider value={{ theme, DarkTheme, LightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThememodeProvider>
  );
}

export default App;
