import { Outlet } from "react-router-dom";
import NavbarComponent from "./component/Navbar/NavbarComponent";
import FooterComponent from "./component/Footer/FooterComponent";
import { useEffect, useState } from "react";
import { ThemeType } from "./theme/Theme";

/**
 * Component defintion for the App component.
 * @returns The App component.
 */
function App() {
  const [theme, setTheme] = useState(
    (localStorage.getItem("theme") as ThemeType)
      ? (localStorage.getItem("theme") as ThemeType)
      : ThemeType.Light
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document
      .querySelector("html")
      ?.setAttribute("data-theme", theme as ThemeType);
  }, [theme]);

  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
