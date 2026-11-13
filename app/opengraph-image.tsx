import { ImageResponse } from "next/og";

export const alt = "Muhammad Ali | Full-Stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#2B1B14",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Ambient Background Glows */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "#C9A27E",
            opacity: 0.15,
            filter: "blur(120px)",
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "10px 24px",
              borderRadius: "9999px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#C9A27E",
              }}
            />
            <span
              style={{
                color: "#C9A27E",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Full-Stack Web Developer
            </span>
          </div>

          <span
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "18px",
              letterSpacing: "0.05em",
            }}
          >
            KPK, Pakistan
          </span>
        </div>

        {/* Center Main Identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Muhammad Ali
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "rgba(255, 255, 255, 0.8)",
              margin: 0,
              fontWeight: 300,
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Crafting high-performance web applications with React, Next.js, and Supabase.
          </p>
        </div>

        {/* Bottom Technical Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "32px",
          }}
        >
          {["React", "Next.js", "Supabase", "Tailwind CSS", "TypeScript"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: "rgba(201, 162, 126, 0.12)",
                  border: "1px solid rgba(201, 162, 126, 0.3)",
                  color: "#FAF7F2",
                  padding: "8px 18px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
