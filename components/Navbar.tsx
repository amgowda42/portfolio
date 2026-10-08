"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

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
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
        className={`fixed inset-x-0 top-0 z-50 h-16 border-b pt-[env(safe-area-inset-top)] transition-all duration-300 ${
          isScrolled
            ? "border-(--border) bg-[rgba(10,10,15,0.85)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6">
          <button
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
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer rounded-lg px-3.5 py-1.5 text-sm font-medium text-(--text-muted) transition-colors duration-200 hover:bg-(--bg-surface) hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-(--border) bg-transparent text-(--text-muted) transition-colors duration-200 hover:bg-(--bg-surface) hover:text-foreground md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      <div
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
          className={`absolute right-0 top-0 flex h-full w-[min(82vw,22rem)] flex-col border-l border-(--border) bg-(--bg-surface) pt-[calc(env(safe-area-inset-top)+1rem)] shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-(--border) px-5 py-4">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-(--accent-light)">
              Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-(--text-muted) transition-colors hover:bg-(--bg-elevated) hover:text-foreground"
              aria-label="Close navigation"
            >
              <X size={18} strokeWidth={2} />
            </button>
          </div>

          <div className="flex flex-col gap-1 p-4 sm:p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
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
