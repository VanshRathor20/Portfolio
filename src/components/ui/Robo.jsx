import React, { Suspense } from "react";

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

export default function Robo({ onLoad }) {
  const sizeStyle = {
    width: "clamp(320px, 55vw, 500px)",
    height: "clamp(320px, 55vw, 500px)",
    position: "relative",
    overflow: "hidden",
  };

  const transparentFallback = (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );

  return (
    <div style={sizeStyle}>
      <Suspense fallback={transparentFallback}>
        <LazySpline
          scene="https://prod.spline.design/r7LyER-xttOddq6w/scene.splinecode"
          onLoad={onLoad}
          style={{ width: "100%", height: "110%", marginBottom: "-40px" }}
        />
      </Suspense>

      {/* Watermark cover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          background: "#0A1931",
          zIndex: 10,
        }}
      />
    </div>
  );
}
