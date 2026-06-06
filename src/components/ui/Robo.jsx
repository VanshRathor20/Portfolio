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
          height: "100%",
        }}
      />
    </div>
  );
}
