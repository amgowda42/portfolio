import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-8 border-t-2 border-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-indigo-600 to-indigo-700 text-white mb-4">
            <Mail size={15} strokeWidth={2} />
          </div>

          <div className="mb-8">
            <a
              href="mailto:annappag2020@gmail.com"
              className="inline-block text-lg font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
            >
              annappag2020@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
