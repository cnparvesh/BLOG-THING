import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme, setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <h1 className="logo" onClick={() => setPage("home")}>
        BLOG-THING
      </h1>

      <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun size={26} /> : <Moon size={26} />}
      </div>

      {isOpen && (
        <div className="dropdown">
          <p onClick={() => { setPage("blogs"); setIsOpen(false); }}>
            Blogs
          </p>

          <p onClick={() => { setPage("login"); setIsOpen(false); }}>
            Login
          </p>

          <p onClick={() => { setPage("create"); setIsOpen(false); }}>
            Create Account
          </p>
        </div>
      )}
    </nav>
  );
}