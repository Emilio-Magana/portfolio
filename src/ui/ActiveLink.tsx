import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export default function ActiveLink({ children, href }: LinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!isActive) {
      setTimeout(() => {
        router.push(href);
      }, 300);
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={
        isActive && href !== "/"
          ? "text-primary underline underline-offset-2"
          : ""
      }
    >
      {children}
    </Link>
  );
}
