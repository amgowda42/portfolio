import {
  FileJson,
  Database,
  GitBranch,
  Layers,
  Zap,
  Package,
  Server,
  Workflow,
  Leaf,
  Braces,
} from "lucide-react";

const skills = [
  {
    name: "JavaScript (ES6+)",
    icon: FileJson,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    hoverBg: "group-hover:bg-yellow-100",
    borderColor: "group-hover:border-yellow-300",
  },
  {
    name: "TypeScript",
    icon: Braces,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
    borderColor: "group-hover:border-blue-300",
  },
  {
    name: "React.js",
    icon: Layers,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    hoverBg: "group-hover:bg-cyan-100",
    borderColor: "group-hover:border-cyan-300",
  },
  {
    name: "Next.js",
    icon: Zap,
    color: "text-gray-900",
    bgColor: "bg-gray-50",
    hoverBg: "group-hover:bg-gray-100",
    borderColor: "group-hover:border-gray-300",
  },
  {
    name: "Tailwind CSS",
    icon: Workflow,
    color: "text-teal-500",
    bgColor: "bg-teal-50",
    hoverBg: "group-hover:bg-teal-100",
    borderColor: "group-hover:border-teal-300",
  },
  {
    name: "Redux / RTK Query",
    icon: Package,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-100",
    borderColor: "group-hover:border-purple-300",
  },
  {
    name: "Node.js",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
    hoverBg: "group-hover:bg-green-100",
    borderColor: "group-hover:border-green-300",
  },
  {
    name: "Express.js",
    icon: Server,
    color: "text-gray-700",
    bgColor: "bg-gray-50",
    hoverBg: "group-hover:bg-gray-100",
    borderColor: "group-hover:border-gray-300",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-50",
    hoverBg: "group-hover:bg-green-100",
    borderColor: "group-hover:border-green-300",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    hoverBg: "group-hover:bg-orange-100",
    borderColor: "group-hover:border-orange-300",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Skills & Technologies
          </h2>
        </div>

        <div className="relative rounded-3xl bg-linear-to-br from-indigo-600 to-indigo-700 p-0.5">
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border border-transparent ${skill.bgColor} ${skill.hoverBg} ${skill.borderColor} transition-all duration-300 group-hover:shadow-lg group-hover:scale-110`}
                    >
                      <Icon
                        className={`${skill.color} transition-transform duration-300 group-hover:rotate-12`}
                        size={24}
                        strokeWidth={2}
                      />
                    </div>

                    <p className="text-gray-800 font-medium transition-all duration-300 group-hover:text-gray-900 group-hover:font-semibold group-hover:tracking-wide">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
