"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* interface NavLikProps {
    href: String;
    children: React.ReactNode;
} */

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive
          ? "bg-primary text-primary-content font-semibold"
          : "text-base-content hover:bg-base-200 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
