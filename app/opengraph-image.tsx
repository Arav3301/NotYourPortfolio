import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export const alt = "ARAV — An Explorin' Student";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090B",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#9F9FA9",
          }}
        >
          An explorin&apos; student.
        </div>
        <div style={{ display: "flex", fontSize: 160, fontWeight: 700, letterSpacing: "-0.03em" }}>
          ARAV
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6B6B74", letterSpacing: "0.06em" }}>
          somewhere on the internet
        </div>
      </div>
    ),
    { ...size },
  );
}
