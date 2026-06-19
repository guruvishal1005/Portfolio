import Image from "next/image";
import { aboutIntro, aboutParagraphs, interests } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { DotsGrid } from "./Decorations";

export default function About() {
  return (
    <section className="container-px mt-28">
      <SectionHeader id="about-me" title="about-me" />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <p className="text-white">Hello, I&apos;m Guru Vishal!</p>
          <p className="mt-4 text-gray">{aboutIntro}</p>
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-gray">
              {p}
            </p>
          ))}

          <h3 className="mt-8 text-lg font-semibold text-white">
            <span className="text-accent">#</span>areas-of-interest
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <li
                key={interest}
                className="border border-gray/40 px-3 py-1 text-sm text-gray transition-colors hover:border-accent/70 hover:text-white"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <DotsGrid className="absolute -left-6 top-8 z-0 h-16 w-20" />
          <DotsGrid className="absolute -right-4 bottom-10 z-0 h-16 w-20" />
          <div className="relative z-10 overflow-hidden border border-gray/30">
            <Image
              src="/profile-about.png"
              alt="Guru Vishal"
              width={420}
              height={540}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
