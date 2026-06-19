import { personalStatement, profile } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { DotsGrid } from "./Decorations";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from "./icons";

export default function Contact() {
  return (
    <section className="container-px mt-28">
      <SectionHeader id="contacts" title="contacts" />

      <div className="relative mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        <DotsGrid className="absolute -left-6 bottom-0 z-0 hidden h-20 w-16 lg:block" />

        <div className="relative z-10">
          <p className="text-gray">{personalStatement}</p>
          <p className="mt-4 text-gray">
            I&apos;m open to collaborations, internships, and interesting
            problems. Feel free to reach out — I&apos;ll get back to you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn-outline mt-6"
          >
            Send me an email
          </a>
        </div>

        <div className="relative z-10 w-full max-w-sm justify-self-start border border-gray/50 p-5 lg:justify-self-end">
          <h3 className="font-semibold text-white">Message me here</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-gray transition-colors hover:text-white"
              >
                <MailIcon className="h-5 w-5 text-accent" />
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray">
              <LocationIcon className="h-5 w-5 text-accent" />
              {profile.location}
            </li>
            <li>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray transition-colors hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5 text-accent" />
                guruvishal-sr
              </a>
            </li>
            <li>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray transition-colors hover:text-white"
              >
                <GitHubIcon className="h-5 w-5 text-accent" />
                guruvishal1005
              </a>
            </li>
            <li>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray transition-colors hover:text-white"
              >
                <InstagramIcon className="h-5 w-5 text-accent" />
                guru.vishal10
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
