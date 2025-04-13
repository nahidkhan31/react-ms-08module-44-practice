import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  const links = navigationData.map((nav) => (
    <Link key={nav.id} nav={nav}></Link>
  ));

  return (
    <nav className="flex justify-between mx-10 my-3">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? <X></X> : <Menu className="md:hidden"></Menu>}

        <ul
          className={`md:hidden absolute duration-1000 bg-amber-200 rounded-2xl text-black ${
            open ? "top-8" : "-top-64"
          }`}>
          {links}
        </ul>
        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden">{links}</ul>
      <button className="btn btn-primary">Sing In</button>
    </nav>
  );
};

export default NavBar;
