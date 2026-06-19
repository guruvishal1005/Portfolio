type Props = { className?: string };

export function DotsGrid({ className }: Props) {
  return (
    <div
      className={`dots-grid ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}

export function SquareOutline({ className }: Props) {
  return (
    <div
      className={`border border-gray/40 ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}

export function OverlappingSquares({ className }: Props) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <span className="absolute left-0 top-0 h-12 w-12 border border-accent" />
      <span className="absolute left-6 top-6 h-12 w-12 border border-accent" />
    </div>
  );
}
