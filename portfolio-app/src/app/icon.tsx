import { ImageResponse } from "next/og";

// Image generation metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Icon generation pipeline
export default function Icon() {
  return new ImageResponse(
    (
      // High-tech Cyberpunk Terminal "C" / Node Box
      <div
        style={{
          fontSize: 20,
          background: "#040406",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          border: "2px solid #00f0ff",
          color: "#00f0ff",
          fontFamily: "monospace",
          fontWeight: "bold",
          boxShadow: "0 0 8px rgba(0, 240, 255, 0.5)",
        }}
      >
        ⎋
      </div>
    ),
    // Options
    {
      ...size,
    }
  );
}