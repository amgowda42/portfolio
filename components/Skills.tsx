import {
  FileJson,
  Database,
  GitBranch,
  Layers,
  Zap,
  Package,
  Server,
  Sparkles,
  Leaf,
  Braces,
} from "lucide-react";

const skills = [
  {
    name: "JavaScript",
    sub: "ES6+",
    icon: FileJson,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    glowColor: "shadow-yellow-200",
    borderHover: "hover:border-yellow-300",
  },
  {
    name: "TypeScript",
    sub: "Strongly Typed",
    icon: Braces,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    glowColor: "shadow-blue-200",
    borderHover: "hover:border-blue-300",
  },
  {
    name: "React.js",
    sub: "UI Library",
    icon: Layers,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    glowColor: "shadow-cyan-200",
    borderHover: "hover:border-cyan-300",
  },
  {
    name: "Next.js",
    sub: "Full-stack Framework",
    icon: Zap,
    color: "text-gray-900",
    bgColor: "bg-gray-100",
    glowColor: "shadow-gray-200",
    borderHover: "hover:border-gray-400",
  },
  {
    name: "Vite",
    sub: "Build Tool",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    glowColor: "shadow-purple-200",
    borderHover: "hover:border-purple-300",
  },
  {
    name: "Redux",
    sub: "RTK Query",
    icon: Package,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    glowColor: "shadow-purple-200",
    borderHover: "hover:border-purple-300",
  },
  {
    name: "Node.js",
    sub: "Runtime",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
    glowColor: "shadow-green-200",
    borderHover: "hover:border-green-300",
  },
  {
    name: "Express.js",
    sub: "Web Framework",
    icon: Server,
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    glowColor: "shadow-gray-200",
    borderHover: "hover:border-gray-400",
  },
  {
    name: "MongoDB",
    sub: "NoSQL Database",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-50",
    glowColor: "shadow-green-200",
    borderHover: "hover:border-green-300",
  },
  {
    name: "Git & GitHub",
    sub: "Version Control",
    icon: GitBranch,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    glowColor: "shadow-orange-200",
    borderHover: "hover:border-orange-300",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-2">
            What I work with
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Skills & Technologies
          </h2>
          <div className="mt-4 mx-auto h-1 w-12 rounded-full bg-indigo-600" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`
                  group relative flex flex-col items-center gap-3 
                  rounded-2xl border border-gray-100 bg-white 
                  p-5 text-center cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg ${skill.glowColor}
                  ${skill.borderHover}
                `}
              >
                {/* Icon Box */}
                <div
                  className={`
                    flex h-14 w-14 items-center justify-center 
                    rounded-xl ${skill.bgColor}
                    transition-all duration-300 
                    group-hover:scale-110
                  `}
                >
                  <Icon className={skill.color} size={26} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div>
                  <p className="text-gray-900 font-semibold text-sm leading-tight">
                    {skill.name}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{skill.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
