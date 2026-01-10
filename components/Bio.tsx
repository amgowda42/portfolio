// components/Bio.tsx

import Image from "next/image";

export default function Bio() {
  return (
    <section
      id="bio"
      className="relative flex items-center bg-white pt-20 overflow-hidden"
    >
      {/* ===== Electronics Background Drawings ===== */}
      <svg
        className="absolute top-10 left-10 w-72 h-72 text-[#4E5DE0] opacity-[0.06]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 200 200"
      >
        {/* Circuit lines */}
        <path d="M20 40h60v40h40v60h60" />
        <circle cx="20" cy="40" r="3" />
        <circle cx="80" cy="80" r="3" />
        <circle cx="120" cy="140" r="3" />
      </svg>

      <svg
        className="absolute bottom-16 right-20 w-80 h-80 text-[#5868F7] opacity-[0.05]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 200 200"
      >
        {/* Microchip */}
        <rect x="60" y="60" width="80" height="80" rx="8" />
        <path d="M60 80h-20M60 120h-20M140 80h20M140 120h20" />
        <path d="M80 60v-20M120 60v-20M80 140v20M120 140v20" />
      </svg>

      <svg
        className="absolute top-1/2 right-1/3 w-64 h-64 text-[#4E5DE0] opacity-[0.04]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 200 200"
      >
        {/* Signal wave */}
        <path d="M10 100c20-40 40-40 60 0s40 40 60 0 40-40 60 0" />
      </svg>

      {/* ===== Content ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Annappa Gowda
              </h1>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-[#4E5DE0] to-[#5868F7] bg-clip-text text-transparent">
                Frontend Developer
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                A Computer Science engineer with strong roots in Electronics &
                Communication Engineering. I blend logical circuit-level
                thinking with modern frontend development to build scalable,
                high-performance web applications with clean and thoughtful UI.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative blurs (existing style preserved) */}
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-purple-100 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-blue-100 rounded-full blur-2xl opacity-60"></div>

              {/* Border-only Image Frame */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#4E5DE0] to-[#5868F7] p-[3px]">
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
