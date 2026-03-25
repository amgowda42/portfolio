"use client";

import Image from "next/image";
import { Github, Twitter, Linkedin, ArrowDownRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Bio() {
  const [isClient] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent): void => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const socials = [
    {
      href: "https://github.com/amgowda42",
      label: "GitHub",
      icon: <Github size={18} strokeWidth={1.5} />,
      handle: "amgowda42",
    },
    {
      href: "https://x.com/AnnappaGowda7",
      label: "Twitter/X",
      icon: <Twitter size={18} strokeWidth={1.5} />,
      handle: "@AnnappaGowda7",
    },
    {
      href: "https://www.linkedin.com/in/annappa-gowda",
      label: "LinkedIn",
      icon: <Linkedin size={18} strokeWidth={1.5} />,
      handle: "annappa-gowda",
    },
    {
      href: "https://medium.com/@annappag2020",
      label: "Medium",
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
      handle: "@annappag2020",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div
        className="absolute w-175 h-175 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
          top: "-10%",
          right: "-5%",
          transform: isClient
            ? `translate(${-mousePos.x * 0.2}px, ${-mousePos.y * 0.2}px)`
            : "none",
          transition: "transform 0.7s ease-out",
        }}
      />
      <div
        className="absolute w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
          bottom: "0%",
          left: "-5%",
          transform: isClient
            ? `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`
            : "none",
          transition: "transform 1s ease-out",
        }}
      />

      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["const", "async", "=>", "{}", "[]", "npm", "git", "ssh"].map(
            (text, i) => (
              <span
                key={i}
                className="absolute font-mono text-xs select-none"
                style={{
                  color: "rgba(99,102,241,0.12)",
                  left: `${10 + i * 12}%`,
                  top: `${15 + (i % 3) * 25}%`,
                  animation: `floatCode ${6 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                {text}
              </span>
            ),
          )}
        </div>
      )}

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div
              className={`transition-all duration-700 delay-100 ${isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none tracking-tight">
                Annappa
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #3b82f6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Gowda
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-indigo-700" />
                <span className="font-mono text-sm text-indigo-500 tracking-widest uppercase">
                  Full Stack Developer
                </span>
                <span className="font-mono text-sm text-purple-400 tracking-widest uppercase">Wordsmith</span>
              </div>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg font-medium">
                1.6 years of professional experience contributing majorly to{" "}
                <span className="text-gray-800 font-semibold">
                  company-scale products
                </span>
                . Currently diving deep into{" "}
                <span className="text-indigo-600 font-semibold">
                  server infrastructure
                </span>
                , scaling systems, and cloud deployment.
              </p>
            </div>

            <div
              className={`space-y-2 transition-all duration-700 delay-500 ${isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-2.5 px-4 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-200 w-fit"
                  aria-label={s.label}
                >
                  <span className="text-gray-400 group-hover:text-indigo-500 transition-colors duration-200">
                    {s.icon}
                  </span>
                  <span className="font-mono text-sm text-gray-400 group-hover:text-gray-800 transition-colors duration-200">
                    {s.handle}
                  </span>
                  <ArrowDownRight
                    size={14}
                    className="text-transparent group-hover:text-indigo-500 transition-all duration-200 -rotate-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isClient ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-indigo-500/50 rounded-tl-sm" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-indigo-500/50 rounded-br-sm" />

              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-30"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  transform: isClient
                    ? `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)`
                    : "none",
                  transition: "transform 0.4s ease-out",
                }}
              />

              <div
                className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-gray-200/80"
                style={{
                  transform: isClient
                    ? `perspective(1000px) rotateY(${mousePos.x * 0.015}deg) rotateX(${-mousePos.y * 0.015}deg)`
                    : "none",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <Image
                  src="/image_1.jpg"
                  alt="Annappa Gowda"
                  className="object-cover"
                  fill
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-white/30 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm bg-white/60 border-t border-white/60">
                  <p className="text-xs font-mono text-gray-500">
                    <span className="text-indigo-500">~/</span> annappa-gowda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isClient && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-8 bg-linear-to-b from-gray-400 to-transparent animate-pulse" />
        </div>
      )}

      <style jsx>{`
        .dot-grid {
          background-image: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.13) 1px,
            transparent 1px
          );
          background-size: 28px 28px;
        }

        @keyframes floatCode {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateY(-18px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
