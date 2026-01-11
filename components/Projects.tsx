import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    github: "",
    title: "E-Commerce Platform",
    points: [
      "Full-stack e-commerce solution with advanced features",
      "Secure payment integration with Stripe",
      "Real-time inventory management system",
      "Dynamic product filtering and search",
    ],
    tags: ["React", "Node.js", "MongoDB", "Redux"],
  },
  {
    id: 2,
    title: "Task Management App",
    github: "",
    points: [
      "Collaborative task management with real-time updates",
      "Team collaboration features and notifications",
      "Advanced project tracking capabilities",
      "Drag-and-drop interface for task organization",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    github: "",
    points: [
      "Interactive weather dashboard with location-based forecasts",
      "Real-time weather updates and alerts",
      "Beautiful data visualizations with charts",
      "Support for multiple cities worldwide",
    ],
    tags: ["React", "API", "Chart.js"],
  },
  {
    id: 4,
    title: "Social Media App",
    github: "",
    points: [
      "Full-featured social platform with user profiles",
      "Real-time messaging and notifications",
      "Content sharing with images and videos",
      "Follow system and activity feeds",
    ],
    tags: ["MERN Stack", "Socket.io"],
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
              className="group relative cursor-pointer rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.3)] flex flex-col h-full"
            >
              <div className="absolute right-6 top-6 opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight
                  size={24}
                  className="text-indigo-600"
                  strokeWidth={2.5}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors duration-300 pr-8">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
