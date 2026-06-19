import { profile } from "@/data/portfolio";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons";

export default function SocialSidebar() {
  const links = [
    { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: profile.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  ];

  return (
    <aside className="pointer-events-none fixed left-0 top-0 z-30 hidden h-screen w-12 flex-col items-center lg:flex">
      <span className="mt-0 h-1/3 w-px bg-gray/40" />
      <div className="pointer-events-auto flex flex-col items-center gap-5 py-6">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray transition-colors hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </aside>
  );
}
