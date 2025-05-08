// import Socials from "./Socials";
import { Link } from "wouter";
// import mountain from "../assets/icons8-mountain-96.png";
import mountain from "/icons8-mountain-96.png";

export default function Footer() {
  return (
    <footer className="my-8 flex flex-col justify-center place-self-center ipad_mini:flex-row-reverse ipad_mini:justify-between">
      {/* <Socials /> */}
      <p className="text-muted-foreground text-xs">
        &copy;{new Date().getFullYear()} Emilio Maga&ntilde;a
        {" | "}
        <Link className="link font-bold" href="/privacy">
          privacy
        </Link>
        {" | "}
        <a
          className="link font-bold"
          href="https://www.icons8.com"
          target="_blank"
        >
          <img src={mountain} className="inline w-5 pr-1"></img>
          from icons8.com
        </a>
      </p>
    </footer>
  );
}
