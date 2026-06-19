import { skillGroups } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { DotsGrid, OverlappingSquares, SquareOutline } from "./Decorations";

export default function Skills() {
  return (
    <section className="container-px mt-28">
      <SectionHeader id="skills" title="skills" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* Decorative column */}
        <div className="relative hidden min-h-[300px] lg:block" aria-hidden="true">
          <SquareOutline className="absolute left-32 top-2 h-16 w-16" />
          <DotsGrid className="absolute left-2 top-20 h-16 w-24" />
          <DotsGrid className="absolute left-28 top-40 h-16 w-24" />
          <OverlappingSquares className="absolute left-6 bottom-6 h-20 w-20" />
          <SquareOutline className="absolute left-40 bottom-0 h-10 w-10" />
        </div>

        {/* Skill boxes */}
        <div className="grid auto-rows-min gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="border border-gray/40">
              <h3 className="border-b border-gray/40 px-4 py-2 font-semibold text-white">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1 px-4 py-3 text-sm text-gray">
                {group.items.map((item) => (
                  <span key={item} className="whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
