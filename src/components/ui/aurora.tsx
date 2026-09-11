"use client";

export function Aurora({ intensity = "normal" }: { intensity?: "subtle" | "normal" | "vivid" }) {
  const scale = intensity === "subtle" ? 0.6 : intensity === "vivid" ? 1.4 : 1;

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className="aurora-purple animate-blob"
        style={{
          width: `${60 * scale}vw`,
          height: `${50 * scale}vw`,
          top: "-15vw",
          left: "-10vw",
        }}
      />
      <div
        className="aurora-blue animate-blob-slow"
        style={{
          width: `${50 * scale}vw`,
          height: `${45 * scale}vw`,
          top: "-10vw",
          right: "-15vw",
        }}
      />
      <div
        className="aurora-rose animate-blob"
        style={{
          width: `${35 * scale}vw`,
          height: `${30 * scale}vw`,
          bottom: "10vw",
          left: "5vw",
          animationDelay: "3s",
        }}
      />
      <div
        className="aurora-orange animate-blob-slow"
        style={{
          width: `${30 * scale}vw`,
          height: `${28 * scale}vw`,
          bottom: "5vw",
          right: "0",
          animationDelay: "1.5s",
        }}
      />
    </div>
  );
}

