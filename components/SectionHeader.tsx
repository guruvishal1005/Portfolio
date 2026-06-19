type SectionHeaderProps = {
  id?: string;
  title: string;
  trailing?: React.ReactNode;
};

export default function SectionHeader({ id, title, trailing }: SectionHeaderProps) {
  return (
    <div id={id} className="flex items-center gap-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white whitespace-nowrap">
        <span className="text-accent">#</span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-accent/70" />
      {trailing ? <div className="shrink-0">{trailing}</div> : null}
    </div>
  );
}
