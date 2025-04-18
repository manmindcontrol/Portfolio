"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "landing",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
];

const Routing = () => {
  return (
    <nav>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Routing;
