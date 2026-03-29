import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        color: "#111",
        fontSize: 34,
        fontWeight: 800,
        fontFamily: "system-ui, sans-serif",
        letterSpacing: -1,
        borderRadius: 5,
      }}
    >
      dBw
    </div>,
    {
      ...size,
    },
  );
}
