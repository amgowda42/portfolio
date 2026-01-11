import { Code2, Server, Sparkles } from "lucide-react";

export default function AboutExpertise() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            My Key Areas of Impact
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={24} strokeWidth={2} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Front End</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I come up with robust solutions using{" "}
                <span className="font-semibold text-blue-600">TypeScript</span>{" "}
                and{" "}
                <span className="font-semibold text-yellow-600">
                  JavaScript
                </span>
                . I focus on{" "}
                <span className="font-semibold">front-end architecture</span>,{" "}
                <span className="font-semibold">clean UI design</span>,{" "}
                <span className="font-semibold">high-quality CSS</span>, and
                efficient API handling with{" "}
                <span className="font-semibold text-purple-600">
                  Redux Toolkit
                </span>
                .
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Server size={24} strokeWidth={2} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Back End</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I work with{" "}
                <span className="font-semibold text-green-600">Node.js</span>,{" "}
                <span className="font-semibold text-gray-700">Express.js</span>,
                and{" "}
                <span className="font-semibold text-green-600">MongoDB</span>,
                emphasizing{" "}
                <span className="font-semibold">proper data modeling</span> and{" "}
                <span className="font-semibold">maintainable architecture</span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-linear-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-indigo-600 text-white shrink-0 mt-1">
              <Sparkles size={20} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 leading-relaxed">
                I keep myself updated with the latest technologies. Please
                connect with me for any{" "}
                <span className="font-semibold text-indigo-600">
                  front-end solutions
                </span>
                , as I&apos;m currently more specialized in that, while also
                extending my expertise to the back end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
