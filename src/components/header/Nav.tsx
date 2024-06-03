import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center gap-x-12">
      {[
        ["Products", "/products"],
        ["Solutions", "/solutions"],
        ["Pricing", "/pricing"],
        ["Resources", "/desources"],
      ].map(([title, url]) => (
        <a href={url}>{title}</a>
      ))}
    </nav>
  );
};

export default Nav;
