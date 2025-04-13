import React from "react";

const Link = ({ nav }) => {
  return (
    <div>
      <li className="mr-10">
        <a href={nav.path}>{nav.name}</a>
      </li>
    </div>
  );
};

export default Link;
