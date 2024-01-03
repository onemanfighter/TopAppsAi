import { NavLink } from "react-router-dom";
import { useState } from "react";
import EndNavComponent from "./subcomponent/EndNavComponent";

/**
 * Proptypes for the Navbar component
 */
export interface INavBarProps {}

/**
 * Component definition for the Navbar component
 *
 * @param props The proptypes for the component
 * @returns The Navbar component
 */
export default function NavbarComponent(props: INavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar drop-shadow-lg bg-base-200">
      <div className="navbar-start">
        <div className="drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="btn btn-ghost btn-circle scale:105 hover:scale-110 drop-shadow-lg aria-pressed:scale-95">
            <label
              htmlFor="my-drawer-2"
              onClick={() => {
                setOpen(!open);
              }}
              className="btn btn-circle swap swap-rotate drawer-button"
            >
              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <SideDrawer />
        </div>
      </div>
      <div className="navbar-center drop-shadow-xl p-1">
        <NavLink className="text-xl" to={""}>
          <img
            src={require("../../assets/image/logo-no-background.png")}
            className="h-12 md:h-14 xl:h-16 fill-neutral-content"
          />
        </NavLink>
      </div>
      <EndNavComponent />
    </div>
  );
}

/**
 * Return functional component for Side drawar.
 *
 * @returns The SideDrawer component.
 */
function SideDrawer() {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul
        className={`menu menu-sm dropdown-content hmt-1 h-screen shadow w-64 glass text-primary-content`}
      >
        <li>
          <NavLink
            to=""
            className=" text-lg m-2 px-2 py-1 outline-primary outline text-primary bg-base-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="top"
            className="text-lg m-2 px-2 py-1 outline-primary outline text-primary bg-base-300"
          >
            Top
          </NavLink>
        </li>
        <li>
          <NavLink
            to="category"
            className="text-lg m-2 px-2 py-1 outline-primary outline text-primary bg-base-300"
          >
            Category
          </NavLink>
        </li>
        <li>
          <NavLink
            to="blog"
            className="text-lg m-2 px-2 py-1 outline-primary outline text-primary bg-base-300"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="newsfeed"
            className="text-lg m-2 px-2 py-1 outline-primary outline text-primary bg-base-300"
          >
            NewsFeed
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
