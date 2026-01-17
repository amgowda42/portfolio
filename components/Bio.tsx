"use client";
import Image from "next/image";
import { Github, Twitter, Linkedin, Code2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Bio() {
  const [isClient, setIsClient] = useState(false);
  const [particles] = useState(() =>
    [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
    })),
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  return (
    <section
      id="about"
      className="relative flex items-center bg-white pt-20 overflow-hidden min-h-screen"
    >
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s infinite ease-in-out`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 transition-all duration-1000 ${
                  isClient
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Annappa Gowda
              </h1>
              <div className="relative mb-6 overflow-hidden h-12">
                <h2
                  className={`text-2xl sm:text-3xl font-semibold bg-linear-to-r from-[#4E5DE0] to-[#5868F7] bg-clip-text text-transparent inline-flex items-center gap-3 transition-all duration-1000 delay-300 ${
                    isClient
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <Code2 className="text-[#4E5DE0]" size={28} />
                  Full Stack Developer
                  <Sparkles
                    className="text-[#5868F7] animate-pulse"
                    size={20}
                  />
                </h2>
              </div>
              <p
                className={`text-lg text-gray-600 leading-relaxed mb-4 transition-all duration-1000 delay-500 ${
                  isClient
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Full Stack Developer with 1.6 years of professional experience,
                having worked on more than five products. I hold a Bachelor of
                Engineering degree in Electronics and Communication Engineering.
              </p>
              <div
                className={`flex items-center gap-4 transition-all duration-1000 delay-700 ${
                  isClient
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <a
                  href="https://github.com/amgowda42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="GitHub"
                >
                  <Github
                    size={22}
                    className="text-gray-700 group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href="https://x.com/AnnappaGowda7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="Twitter/X"
                >
                  <Twitter
                    size={22}
                    className="text-gray-700 group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/annappa-gowda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={22}
                    className="text-gray-700 group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href="https://medium.com/@annappag2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="Medium"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className={`relative transition-all duration-1000 delay-200 ${
                isClient ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-96 h-96 rounded-full border-2 border-blue-200 opacity-30 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                </div>
                <div className="absolute w-88 h-88 rounded-full border-2 border-purple-200 opacity-40 animate-spin-reverse">
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                </div>
                <div className="absolute w-84 h-84 rounded-full border-2 border-indigo-200 opacity-50 animate-spin-medium">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl animate-pulse-slow" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-r from-[#4E5DE0] to-[#5868F7] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <Image
                  src="/image_1.jpg"
                  alt="Annappa Gowda"
                  className=" width={600}
                  height={600} object-cover transform group-hover:scale-110 transition-transform duration-700"
                  width={600}
                  height={600}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-linear-to-tr from-indigo-500 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse-delay" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-spin-medium {
          animation: spin-slow 12s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-delay {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
