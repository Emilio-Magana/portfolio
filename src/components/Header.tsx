"use client";

import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import ChatToggle from "./Chatbot/ChatToggle";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

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

interface Props {
  children: React.ReactNode;
  href: string;
}

function ActiveLink({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const router = useRouter();

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(href);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={
        isActive && href !== "/"
          ? "text-tertiary underline underline-offset-2"
          : ""
      }
    >
      {children}
    </Link>
  );
}
export default function Header() {
  const [location] = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 py-6 font-mono backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[674px] items-center justify-between transition-all duration-300 ease-in-out phone:px-2 ipad_mini:px-8">
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
        <div className="flex items-baseline phone:gap-2 ipad_mini:gap-4">
          <ChatToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
