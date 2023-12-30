import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useDimensions } from "./customhook/use-dimension";
import EndNavComponent from "./subcomponent/EndNavComponent";

/**
 * Proptypes for the Navbar component
 */
export interface INavBarProps {}

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 500}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

/**
 * Component definition for the Navbar component
 *
 * @param props The proptypes for the component
 * @returns The Navbar component
 */
export default function NavbarComponent(props: INavBarProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="navbar sticky drop-shadow-lg bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle scale:105 hover:scale-110 drop-shadow-lg aria-pressed:scale-95"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </div>
          <motion.ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-1 z-50 p-2 shadow w-52 bg-primary ${
              open ? "block" : "hidden"
            }`}
            animate={open ? "open" : "closed"}
            ref={containerRef}
            custom={height}
            variants={variants}
          >
            <li>
              <NavLink
                to=""
                className="text-lg m-1 px-2 py-1 bg-secondary text-secondary-content"
              >
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink to="top" className="text-lg  m-1 px-2 py-1">
                Top
              </NavLink>
            </li>
            <li>
              <NavLink to="category" className="text-lg  m-1 px-2 py-1">
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="blog" className="text-lg m-1 px-2 py-1">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className="text-lg">
                NewsFeed
              </NavLink>
            </li>
          </motion.ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink className="btn btn-ghost text-xl" to={""}>
          <img
            src={require("../../assets/image/logo-no-background.png")}
            className="h-12 fill-neutral-content"
          />
        </NavLink>
      </div>
      <EndNavComponent />
    </div>
  );
}
