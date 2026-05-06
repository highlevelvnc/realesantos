type Props = {
  eyebrow: string;
  title: string;
  index?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  index,
  align = "left",
}: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        data-reveal
        className={`label-tech flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        {index && <span className="text-bone/40">/{index}</span>}
        <span className="inline-block h-px w-12 bg-copper align-middle" />
        <span className="text-bone/70">{eyebrow}</span>
      </p>
      <h2
        data-reveal
        style={{ ["--reveal-delay" as string]: "140ms" }}
        className="h-section mt-6 max-w-[18ch] text-bone"
      >
        {title}
      </h2>
    </div>
  );
}
