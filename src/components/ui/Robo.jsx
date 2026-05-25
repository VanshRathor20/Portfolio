import Spline from "@splinetool/react-spline";

export default function Robo({ onLoad }) {
  return (
    <div
      style={{
        width: "min(500px, 90vw)",
        height: "min(500px, 90vw)",
        position: "relative",
      }}
    >
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/i-Dau1OxM2uetrTH/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
