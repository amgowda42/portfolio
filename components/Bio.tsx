import Image from "next/image";

import { Github, Twitter, Linkedin } from "lucide-react";

export default function Bio() {
  return (
    <section
      id="bio"
      className="relative  flex items-center bg-white pt-20 overflow-hidden"
    >
      <svg
        className="absolute top-10 left-10 w-72 h-72 text-gray-950 opacity-[0.12]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 200 200"
      >
        <path d="M20 40h60v40h40v60h60" />
        <circle cx="20" cy="40" r="3" />
        <circle cx="80" cy="80" r="3" />
        <circle cx="120" cy="140" r="3" />
      </svg>

      <svg
        className="absolute bottom-16 right-20 w-80 h-80 text-gray-950 opacity-[0.12]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 200 200"
      >
        <rect x="60" y="60" width="80" height="80" rx="8" />
        <path d="M60 80h-20M60 120h-20M140 80h20M140 120h20" />
        <path d="M80 60v-20M120 60v-20M80 140v20M120 140v20" />
      </svg>

      <svg
        className="absolute top-1/2 right-1/3 w-64 h-64 text-gray-950 opacity-[0.12]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 200 200"
      >
        <path d="M10 100c20-40 40-40 60 0s40 40 60 0 40-40 60 0" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Annappa Gowda
              </h1>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-linear-to-r from-[#4E5DE0] to-[#5868F7] bg-clip-text text-transparent">
                Full Stack Developer
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Full Stack Developer with 1.6 years of professional experience,
                having worked on more than five products. I hold a Bachelor of
                Engineering degree in Electronics and Communication Engineering.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/amgowda42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110"
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
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110"
                  aria-label="Twitter/X"
                >
                  <Twitter
                    size={22}
                    className="text-gray-700 group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/annappa-gowda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110"
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
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-linear-to-r from-[#4E5DE0] to-[#5868F7] transition-all duration-300 hover:scale-110"
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
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-linear-to-br from-[#4E5DE0] to-[#5868F7] p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Annappa Gowda"
                    className="w-full h-full object-cover rounded-full"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
