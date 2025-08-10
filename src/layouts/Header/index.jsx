import { FaBars } from "react-icons/fa";
import "./header.scss";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import useTheme from "../../hooks/useTheme";
import { useEffect, useState } from "react";

const Header = ({ sidebar, setSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <div className="header_container">
            <button
              className="header_toggle_button"
              onClick={() => setSidebar((prev) => !prev)}
            >
              <FaBars />
            </button>
            <div className="header_config">
              <div className="header_mode" onClick={toggleTheme}>
                {theme === "light" ? <MdNightlightRound /> : <MdLightMode />}
              </div>
              <div className="header_user_menu"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
