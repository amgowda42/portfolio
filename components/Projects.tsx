import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    github: "https://github.com/amgowda42/vehiclete.git",
    title: "Vehiclete - Complete Vehicle Platform",
    points: [
      "Unified platform for bikes, cars, and cycles with detailed specifications",
      "View pre-calculated EMI details for all vehicles",
      "Book test drive demos directly through the platform",
      "Comprehensive vehicle details, mileage, and pricing overview",
    ],
    tags: ["React.Js", "Node.Js", "MongoDB"],
  },
  {
    id: 2,
    title: "Goal Setter",
    github: "https://github.com/amgowda42/Goal_Setter.git",
    points: [
      "A MERN stack application built to help users set goals, edit, and delete them with ease.",
      "Easy to track their progress",
    ],
    tags: ["React.Js", "Node.Js", "MongoDB"],
  },
  {
    id: 3,
    github: "https://github.com/amgowda42/Hey-Food.git",
    title: "Hey-Food - Food Ordering Platform",
    points: [
      "Food ordering platform using live Swiggy GraphQL APIs",
      "Integrated Redux Toolkit for efficient cart state management",
      "Dynamic restaurant and menu data fetching",
      "Seamless add-to-cart functionality with persistent store",
    ],
    tags: ["React.Js", "Redux Toolkit"],
  },
  {
    id: 4,
    github: "https://github.com/amgowda42/portfolio.git",
    title: "Personal Portfolio",
    points: ["Modern and responsive design showcasing projects and skills"],
    tags: ["Next.Js", "Vercel"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.3)] active:scale-[0.98] md:active:scale-100 flex flex-col h-full"
            >
              <div className="absolute right-6 top-6 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:translate-x-2 md:-translate-y-2 md:group-hover:translate-x-0 md:group-hover:translate-y-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 md:bg-transparent group-hover:bg-indigo-100 transition-colors">
                  <ArrowUpRight
                    size={24}
                    className="text-indigo-600"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors duration-300 pr-12">
                  {project.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {project.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-indigo-600 font-bold mt-1 shrink-0">
                        •
                      </span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100 transition-all duration-300 group-hover:bg-indigo-100 group-hover:border-indigo-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex items-center justify-end gap-2 text-sm text-indigo-600 font-medium">
                <span>View on GitHub</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
