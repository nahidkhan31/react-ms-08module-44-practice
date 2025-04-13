import React from "react";

const Link = ({ nav }) => {
  return (
    <div>
      <li className="lg:mr-10 px-4 hover:bg-amber-400 hover:text-black">
        <a href={nav.path}>{nav.name}</a>
      </li>
    </div>
  );
};

export default Link;
