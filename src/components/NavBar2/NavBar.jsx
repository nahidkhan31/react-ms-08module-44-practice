import React from "react";
import Link from "./Link";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        {navigationData.map((nav) => (
          <Link key={nav.id} nav={nav}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
