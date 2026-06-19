import { experiences } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section className="container-px mt-28">
      <SectionHeader id="experience" title="experience" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <article
            key={exp.role + exp.company}
            className="border border-gray/40 p-6 transition-colors hover:border-accent/70"
          >
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <p className="mt-1 text-sm text-accent">{exp.company}</p>
            <ul className="mt-4 space-y-2">
              {exp.points.map((point) => (
                <li key={point.slice(0, 24)} className="flex gap-2 text-sm text-gray">
                  <span className="mt-1 text-accent">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
