import { useState, useEffect } from "react";
import Navbar from "./components/nav";
import Main from "./components/hero";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import FeatureCards from "./components/FeatureCards";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState("home");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} setPage={setPage} />

      {page === "home" && (
        <>
          <Main setPage={setPage} /> 
          <FeatureCards />
        </>
      )}

      {page === "blogs" && <Blogs />}
      {page === "login" && <Login />}
      {page === "create" && <CreateAccount />}
    </>
  );
}

export default App;