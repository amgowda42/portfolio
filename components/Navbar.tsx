"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen
      ? "hidden"
      : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 48rem)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-[calc(4rem+env(safe-area-inset-top))] border-b pt-[env(safe-area-inset-top)] transition-all duration-300 ${
          isScrolled
            ? "border-(--border) bg-[rgba(10,10,15,0.85)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex min-w-0 cursor-pointer items-center gap-2 bg-transparent p-0"
            aria-label="Go to the about section"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--accent) font-mono text-[11px] font-bold text-[#031a0d]">
              AG
            </span>
            <span className="truncate text-[0.9rem] font-semibold tracking-[-0.01em] text-foreground sm:text-[0.95rem]">
              Annappa Gowda
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer rounded-lg px-3.5 py-1.5 text-sm font-medium text-(--text-muted) transition-colors duration-200 hover:bg-(--bg-surface) hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex size-11 cursor-pointer items-center justify-center rounded-lg border border-(--border) bg-transparent text-(--text-muted) transition-colors duration-200 hover:bg-(--bg-surface) hover:text-foreground md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </nav>

      <div
        inert={!isMobileMenuOpen}
        className={`fixed inset-0 z-40 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          id="mobile-navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(82vw,22rem)] flex-col overflow-y-auto overscroll-contain border-l border-(--border) bg-(--bg-surface) pt-[calc(env(safe-area-inset-top)+1rem)] shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 p-4 sm:p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer rounded-xl border-0 bg-transparent px-4 py-3.5 text-left text-[0.95rem] font-medium text-(--text-muted) transition-colors duration-200 hover:bg-(--bg-elevated) hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
