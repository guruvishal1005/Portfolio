import { profile } from "@/data/portfolio";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoMark,
} from "./icons";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-gray/30">
      <div className="container-px py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-base font-bold text-white">
                <LogoMark className="h-5 w-5 text-accent" />
                {profile.shortName}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-gray transition-colors hover:text-white"
              >
                {profile.email}
              </a>
            </div>
            <p className="mt-3 text-sm text-gray">
              Software Engineer, AI Engineer &amp; Cybersecurity Researcher.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Media</h4>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray transition-colors hover:text-white"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray transition-colors hover:text-white"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray transition-colors hover:text-white"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
