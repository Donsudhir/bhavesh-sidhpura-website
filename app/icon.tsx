import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Monogram favicon — tan "B" on near-black, matching the brand.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14120e",
          color: "#cba56e",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          borderRadius: 6,
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
