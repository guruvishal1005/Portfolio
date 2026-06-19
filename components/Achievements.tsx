import { achievements } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, string> = {
  trophy: "🏆",
  code: "💻",
  rocket: "🚀",
};

export default function Achievements() {
  return (
    <section className="container-px mt-28">
      <SectionHeader id="achievements" title="achievements" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {achievements.map((item) => (
          <div
            key={item.text}
            className="flex items-start gap-4 border border-gray/40 p-5 transition-colors hover:border-accent/70"
          >
            <span className="text-2xl leading-none">{iconMap[item.icon] ?? "•"}</span>
            <p className="text-sm text-gray">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
