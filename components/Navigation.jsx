"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "inicio", href: "/" },
  { name: "usuarios", href: "/users" },
  { name: "contacto", href: "/contact" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full justify-center gap-10 p-4 uppercase">
      {navLinks.map((link, i) => {
        let isActive = Boolean;
        if (link.href === "/users") {
          isActive = pathname.startsWith(link.href);
        } else {
          isActive = pathname === link.href;
        }

        return (
          <Link
            className={
              isActive
                ? "text-slate-300 font-bold transition"
                : "text-slate-500 transition"
            }
            key={i}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
