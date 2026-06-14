import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14120e",
          color: "#f3efe6",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#cba56e",
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 64,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            <span>What if the problem you keep trying to solve&nbsp;</span>
            <span style={{ color: "#cba56e", fontStyle: "italic" }}>
              was never the real problem?
            </span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a39c8c" }}>
          {site.role} · {site.location}
        </div>
      </div>
    ),
    { ...size },
  );
}
