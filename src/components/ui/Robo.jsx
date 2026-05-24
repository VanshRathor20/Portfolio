import Spline from "@splinetool/react-spline";

export default function Robo({ onLoad }) {
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
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
