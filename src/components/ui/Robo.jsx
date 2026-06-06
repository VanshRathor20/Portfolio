import Spline from '@splinetool/react-spline';

export default function Robo({ onLoad }) {
  return (
    <div
      style={{
        width: "clamp(320px, 55vw, 500px)",
        height: "clamp(320px, 55vw, 500px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Spline
        scene="https://prod.spline.design/r7LyER-xttOddq6w/scene.splinecode"
        onLoad={onLoad}
        style={{
          width: "100%",
          height: "110%",
          marginBottom: "-40px",
        }}
      />
      {/* Watermark cover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          background: "#0A1931", // tera bg color
          zIndex: 10,
        }}
      />
    </div>
  );
}
