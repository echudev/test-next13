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
    <div className="flex flex-row w-full justify-center gap-10 p-4">
      {navLinks.map((link, i) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={
              isActive ? "text-white transition" : "text-slate-500 transition"
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
