import React from "react";
import ActiveLink from "./ActiveLink";

const navLinks = [
  {
    name: "Emilio Maga\u00f1a",
    href: "/",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "hobbies",
    href: "/hobbies",
  },
];

export default function Navigation() {
  return (
    <ul className="flex items-baseline transition-all duration-300 ease-in-out phone:gap-2 ipad_mini:gap-4">
      {navLinks.map((nav, id) => (
        <li
          key={id}
          className={
            id === 0
              ? "text-xl font-bold transition-colors hover:text-hover"
              : "transition-colors hover:text-hover"
          }
        >
          <ActiveLink href={nav.href}>{nav.name}</ActiveLink>
        </li>
      ))}
    </ul>
  );
}
