type Props = {
  className?: string;
  variant?: "corner" | "side" | "frame";
};

export default function TechLines({ className = "", variant = "corner" }: Props) {
  if (variant === "corner") {
    return (
      <svg
        className={`pointer-events-none absolute ${className}`}
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden
      >
        <path d="M0 1 H80" stroke="rgba(176,122,69,0.45)" strokeWidth="1" />
        <path d="M1 0 V80" stroke="rgba(176,122,69,0.45)" strokeWidth="1" />
        <circle cx="80" cy="1" r="2" fill="#B07A45" />
        <circle cx="1" cy="80" r="2" fill="#B07A45" />
      </svg>
    );
  }
  if (variant === "side") {
    return (
      <div
        className={`pointer-events-none absolute ${className}`}
        aria-hidden
      >
        <div className="h-full w-px bg-gradient-to-b from-transparent via-copper/35 to-transparent" />
      </div>
    );
  }
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <rect x="0.5" y="0.5" width="199" height="199" stroke="rgba(139,142,143,0.25)" />
      <path d="M0 40 H200 M0 100 H200 M0 160 H200" stroke="rgba(139,142,143,0.10)" />
      <path d="M40 0 V200 M100 0 V200 M160 0 V200" stroke="rgba(139,142,143,0.10)" />
    </svg>
  );
}
