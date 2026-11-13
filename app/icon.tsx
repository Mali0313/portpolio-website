import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

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
          backgroundColor: "#2B1B14",
          borderRadius: "8px",
          border: "1px solid #C9A27E",
          color: "#C9A27E",
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: "-0.5px",
        }}
      >
        MA
      </div>
    ),
    {
      ...size,
    }
  );
}

