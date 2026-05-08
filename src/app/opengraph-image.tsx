import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Medialane Docs — Knowledge Hub"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#09090b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "72px 80px",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Purple gradient blob top-right */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 560,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.08) 55%, transparent 75%)",
        }}
      />
      {/* Faint grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Logotype row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 48,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              background: "white",
              opacity: 0.95,
            }}
          />
        </div>
        <span
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          Medialane
        </span>
        <div
          style={{
            marginLeft: 8,
            padding: "4px 12px",
            borderRadius: 6,
            border: "1px solid rgba(124,58,237,0.5)",
            background: "rgba(124,58,237,0.12)",
            color: "#a78bfa",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Docs
        </div>
      </div>

      {/* Headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, zIndex: 1 }}>
        <span
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-3px",
          }}
        >
          Knowledge Hub
        </span>
        <span
          style={{
            color: "rgba(161,161,170,1)",
            fontSize: 26,
            fontWeight: 400,
            lineHeight: 1.45,
            maxWidth: 680,
            letterSpacing: "-0.3px",
          }}
        >
          Documentation, guides, and governance for Medialane creator capital markets on Starknet.
        </span>
      </div>

      {/* Bottom-right URL */}
      <span
        style={{
          position: "absolute",
          bottom: 56,
          right: 80,
          color: "rgba(82,82,91,1)",
          fontSize: 18,
          letterSpacing: "0.2px",
        }}
      >
        docs.medialane.io
      </span>
    </div>,
    { width: 1200, height: 630 },
  )
}
