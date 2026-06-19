import Image from "next/image";
import { profile } from "@/data/portfolio";
import { DotsGrid, OverlappingSquares } from "./Decorations";

export default function Hero() {
  return (
    <section id="home" className="container-px scroll-mt-24 pt-32 lg:pt-36">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: intro text */}
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            {profile.name} is a{" "}
            <span className="text-accent">Software Engineer</span> &amp;{" "}
            <span className="text-accent">Cybersecurity Researcher</span>
          </h1>
          <p className="mt-6 max-w-xl text-gray">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contacts" className="btn-outline">
              Contact me !!
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Right: photo with decorations */}
        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">
          <OverlappingSquares className="absolute -left-2 top-6 z-0 hidden h-24 w-24 sm:block" />
          <DotsGrid className="absolute -bottom-4 right-2 z-0 h-20 w-28" />

          <div className="relative z-10 overflow-hidden">
            <Image
              src="/profile-hero.png"
              alt={`${profile.name} portrait`}
              width={560}
              height={720}
              priority
              className="mx-auto h-auto w-full object-cover"
            />
          </div>

          <div className="relative z-10 mt-4 flex items-center gap-3 border border-gray/50 px-4 py-2 text-sm">
            <span className="h-3 w-3 bg-accent" />
            <span className="text-gray">
              Currently working on{" "}
              <span className="font-semibold text-white">
                {profile.currentlyWorkingOn}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
