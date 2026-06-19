"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { CloseIcon, LogoMark, MenuIcon } from "./icons";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "about-me", href: "#about-me" },
  { label: "contacts", href: "#contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 text-base font-bold text-white"
        >
          <LogoMark className="h-5 w-5 text-accent" />
          {profile.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray transition-colors hover:text-white"
              >
                <span className="text-accent">#</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-px flex h-[72px] items-center justify-between">
          <span className="flex items-center gap-2 text-base font-bold text-white">
            <LogoMark className="h-5 w-5 text-accent" />
            {profile.shortName}
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-white"
          >
            <CloseIcon className="h-7 w-7" />
          </button>
        </div>
        <ul className="mt-10 flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl text-gray transition-colors hover:text-white"
              >
                <span className="text-accent">#</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
