import { ProjectCard } from "@/components/landing/project-card";
import { projectTiles } from "@/lib/landing-data";

export function ProjectsSection() {
  return (
    <section className="mt-12 rounded-xl max-w-4xl lg:max-w-5xl mx-auto">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
        {projectTiles.map((tile) => (
          <ProjectCard key={tile.title} {...tile} />
        ))}
      </div>
    </section>
  );
}
