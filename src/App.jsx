import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
// import Projects from "./Pages/Projects";
import Error from "./Pages/Error";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  useEffect(() => {
    // on page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }

    // whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);

  const [theme, setTheme] = useState("light");

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Routes>
          <Route exact path={"/"} element={<Landing />} />
          {/* <Route exact path={"/projects"} element={<Projects />} /> */}
          <Route exact path={"*"} element={<Error />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

