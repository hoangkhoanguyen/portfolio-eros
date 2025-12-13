const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    technologies: [{ name: "Node.js" }, { name: "Python" }, { name: "Django" }],
  },
  {
    title: "Database",
    technologies: [{ name: "PostgreSQL" }],
  },
  {
    title: "Tools & DevOps",
    technologies: [{ name: "Docker" }, { name: "Figma" }],
  },
];

export function TechStackSection() {
  return (
    <section className="py-10">
      <h2 className="text-[22px] font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
        Công nghệ của tôi
      </h2>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {techCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
