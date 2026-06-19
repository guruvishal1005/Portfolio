import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { ExternalIcon } from "./icons";

const bannerGradients = [
  "from-[#3a2a4d] to-[#1f2733]",
  "from-[#1f3a32] to-[#1f2733]",
  "from-[#2a2f4d] to-[#1f2733]",
  "from-[#3a2a2a] to-[#1f2733]",
];

export default function Projects() {
  return (
    <section className="container-px mt-28">
      <SectionHeader
        id="projects"
        title="projects"
        trailing={
          <a
            href="https://github.com/guruvishal1005"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-white transition-colors hover:text-accent sm:inline"
          >
            View all ~~&gt;
          </a>
        }
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="flex flex-col border border-gray/40 transition-colors hover:border-accent/70"
          >
            {/* Banner */}
            <div
              className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${
                bannerGradients[i % bannerGradients.length]
              }`}
            >
              <span className="dots-grid absolute right-3 top-3 h-10 w-16 opacity-40" />
              <h3 className="px-4 text-center text-2xl font-bold tracking-wide text-white">
                {project.title}
              </h3>
              {project.featured ? (
                <span className="absolute left-3 top-3 border border-accent/70 px-2 py-0.5 text-[11px] text-accent">
                  featured
                </span>
              ) : null}
            </div>

            {/* Tags */}
            <div className="border-y border-gray/40 px-5 py-2 text-sm text-gray">
              {project.tags.join(" ")}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col px-5 py-5">
              <p className="text-sm font-medium text-white">{project.subtitle}</p>
              <p className="mt-3 text-sm text-gray">{project.description}</p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-gray">
                    <span className="mt-1 text-accent">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.variant === "ghost" ? "btn-ghost" : "btn-outline"
                    }
                  >
                    {link.label} <ExternalIcon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
