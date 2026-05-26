import Container from "../layout/Container";

const SkeletonBlock = ({ className = "", style = {} }) => {
  return <div className={`skeleton-block ${className}`.trim()} style={style} />;
};

const SkeletonLine = ({ width = "100%", height = "16px", style = {} }) => {
  return <SkeletonBlock style={{ width, height, ...style }} />;
};

const SkeletonPill = ({ width = "110px", height = "36px" }) => {
  return <SkeletonBlock style={{ width, height, borderRadius: "999px" }} />;
};

const SkeletonCard = ({ children, className = "", style = {} }) => {
  return (
    <div className={`skeleton-card ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="skeleton-page" aria-busy="true" aria-live="polite">
      <section className="skeleton-section skeleton-hero-section" id="home">
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "80px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div className="hero-grid skeleton-hero-grid">
            <div className="hero-content stack-lg skeleton-stack">
              <SkeletonLine width="170px" height="14px" />
              <SkeletonLine width="92%" height="clamp(3.25rem, 6vw, 5.25rem)" />
              <SkeletonLine width="76%" height="clamp(3.25rem, 6vw, 5.25rem)" />
              <div style={{ display: "grid", gap: "10px", maxWidth: "560px" }}>
                <SkeletonLine width="100%" height="16px" />
                <SkeletonLine width="96%" height="16px" />
                <SkeletonLine width="72%" height="16px" />
              </div>
              <div
                className="hero-actions"
                style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
              >
                <SkeletonPill width="150px" height="48px" />
                <SkeletonPill width="140px" height="48px" />
              </div>
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-visual" aria-hidden="true">
                <div className="hero-visual-glow hero-visual-glow--one" />
                <div className="hero-visual-glow hero-visual-glow--two" />
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SkeletonBlock
                    style={{
                      width: "min(500px, 100%)",
                      aspectRatio: "1 / 1",
                      borderRadius: "28px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skeleton-section about-section" id="about">
        <Container>
          <div className="section-header">
            <SkeletonLine
              width="86px"
              height="12px"
              style={{ marginBottom: "16px" }}
            />
            <SkeletonLine
              width="min(480px, 90%)"
              height="clamp(2.25rem, 4vw, 3.5rem)"
              style={{ marginBottom: "18px" }}
            />
          </div>

          <div
            className="about-layout skeleton-about-layout"
            style={{ display: "flex", flexDirection: "row", gap: "48px" }}
          >
            <div
              className="about-left about-stats"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "45%",
              }}
            >
              {[1, 2, 3].map((item) => (
                <SkeletonCard
                  key={item}
                  style={{ padding: "28px 24px", borderRadius: "16px" }}
                >
                  <SkeletonLine
                    width="72px"
                    height="48px"
                    style={{ marginBottom: "10px" }}
                  />
                  <SkeletonLine width="140px" height="12px" />
                </SkeletonCard>
              ))}
            </div>

            <div className="about-right" style={{ width: "55%" }}>
              <SkeletonCard style={{ padding: "4px 0" }}>
                <div style={{ display: "grid", gap: "12px" }}>
                  <SkeletonLine width="95%" height="28px" />
                  <SkeletonLine width="92%" height="16px" />
                  <SkeletonLine width="88%" height="16px" />
                  <SkeletonLine width="80%" height="16px" />
                  <SkeletonLine width="56%" height="16px" />
                  <SkeletonPill width="170px" height="40px" />
                </div>
              </SkeletonCard>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="skills"
        className="skeleton-section"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Container>
          <div className="section-header">
            <SkeletonLine
              width="92px"
              height="12px"
              style={{ marginBottom: "16px" }}
            />
            <SkeletonLine
              width="220px"
              height="clamp(2rem, 4vw, 3.5rem)"
              style={{ marginBottom: "18px" }}
            />
          </div>

          <div style={{ marginTop: "24px" }}>
            {[
              ["120px", "96px", "132px", "88px", "140px", "110px"],
              ["104px", "92px", "84px", "120px"],
              ["118px", "106px", "96px"],
              ["84px", "110px", "100px", "96px", "118px"],
            ].map((group, groupIndex) => (
              <div
                key={groupIndex}
                style={{ marginBottom: groupIndex === 3 ? "0" : "40px" }}
              >
                <SkeletonLine
                  width="70px"
                  height="10px"
                  style={{ marginBottom: "16px" }}
                />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {group.map((pillWidth, index) => (
                    <SkeletonPill
                      key={`${groupIndex}-${index}`}
                      width={pillWidth}
                      height="40px"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="projects"
        className="skeleton-section projects-section"
        style={{
          background: "#0C0C0C",
          borderRadius: "48px 48px 0 0",
          marginTop: "-40px",
          position: "relative",
          zIndex: 10,
          paddingTop: "80px",
          paddingBottom: "160px",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto 60px" }}>
          <SkeletonLine
            width="120px"
            height="10px"
            style={{ marginBottom: "12px" }}
          />
          <SkeletonLine width="210px" height="48px" />
        </div>

        <div
          style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}
        >
          {[1, 2, 3, 4].map((projectIndex) => (
            <SkeletonCard
              key={projectIndex}
              style={{
                marginBottom: "16px",
                borderRadius: "24px",
                border: "1px solid #1e1e1e",
                background: "#0f0f0f",
                padding: "36px",
                overflow: "hidden",
                minHeight: projectIndex === 4 ? "420px" : "min(76vh, 600px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "24px",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <SkeletonLine width="56px" height="64px" />
                  <div
                    style={{ display: "grid", gap: "8px", paddingTop: "6px" }}
                  >
                    <SkeletonLine width="120px" height="9px" />
                    <SkeletonLine width="220px" height="22px" />
                  </div>
                </div>
                <SkeletonPill width="120px" height="40px" />
              </div>

              <SkeletonBlock
                style={{
                  flex: 1,
                  minHeight: projectIndex === 4 ? "220px" : "55vh",
                  maxHeight: "400px",
                  borderRadius: "14px",
                }}
              />
            </SkeletonCard>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="skeleton-section py-32 px-8 max-w-5xl mx-auto"
      >
        <div style={{ marginBottom: "24px" }}>
          <SkeletonLine
            width="180px"
            height="10px"
            style={{ marginBottom: "16px" }}
          />
          <SkeletonLine width="320px" height="clamp(2.25rem, 4vw, 3.5rem)" />
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, #2a2a2a 10%, #2a2a2a 90%, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          {[1, 2, 3, 4, 5].map((item, index) => {
            const isRight = index % 2 === 0;
            return (
              <div
                key={item}
                style={{
                  position: "relative",
                  display: "flex",
                  marginBottom: index === 4 ? "0px" : "64px",
                  justifyContent: isRight ? "flex-start" : "flex-end",
                  paddingLeft: isRight ? "calc(50% + 40px)" : undefined,
                  paddingRight: !isRight ? "calc(50% + 40px)" : undefined,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "24px",
                    transform: "translateX(-50%)",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#7C3AED",
                    border: "2px solid #0A0A0A",
                  }}
                />

                <SkeletonCard
                  style={{
                    maxWidth: "380px",
                    width: "100%",
                    background: "#0f0f0f",
                    border: "1px solid #1e1e1e",
                    borderRadius: "16px",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "grid", gap: "10px" }}>
                    <SkeletonLine width="120px" height="10px" />
                    <SkeletonLine width="78%" height="18px" />
                    <SkeletonLine width="56%" height="12px" />
                    <SkeletonLine width="96%" height="14px" />
                    <SkeletonLine width="88%" height="14px" />
                  </div>
                </SkeletonCard>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="contact"
        className="skeleton-section"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div
          className="contact-layout"
          style={{
            gap: "80px",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "96px 48px",
          }}
        >
          <div className="contact-left" style={{ flex: "1" }}>
            <SkeletonLine
              width="90px"
              height="12px"
              style={{ marginBottom: "16px" }}
            />
            <SkeletonLine
              width="min(420px, 90%)"
              height="clamp(2.5rem, 5vw, 4rem)"
              style={{ marginBottom: "12px" }}
            />
            <SkeletonLine
              width="70%"
              height="14px"
              style={{ marginBottom: "10px" }}
            />
            <SkeletonLine
              width="82%"
              height="14px"
              style={{ marginBottom: "10px" }}
            />
            <SkeletonLine
              width="48%"
              height="14px"
              style={{ marginBottom: "40px" }}
            />
            <SkeletonLine
              width="220px"
              height="12px"
              style={{ marginBottom: "50px" }}
            />
            <div style={{ display: "flex", gap: "20px" }}>
              {[1, 2, 3, 4, 5].map((item) => (
                <SkeletonBlock
                  key={item}
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                />
              ))}
            </div>
          </div>

          <div
            className="contact-right"
            style={{ flex: "1.2", marginTop: "40px" }}
          >
            <div style={{ display: "grid", gap: "20px" }}>
              <div>
                <SkeletonLine
                  width="64px"
                  height="10px"
                  style={{ marginBottom: "8px" }}
                />
                <SkeletonLine width="100%" height="50px" />
              </div>
              <div>
                <SkeletonLine
                  width="64px"
                  height="10px"
                  style={{ marginBottom: "8px" }}
                />
                <SkeletonLine width="100%" height="50px" />
              </div>
              <div>
                <SkeletonLine
                  width="72px"
                  height="10px"
                  style={{ marginBottom: "8px" }}
                />
                <SkeletonBlock
                  style={{
                    width: "100%",
                    height: "180px",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <SkeletonBlock
                style={{ width: "100%", height: "78px", borderRadius: "10px" }}
              />
              <SkeletonLine width="64%" height="12px" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .skeleton-block {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 37%, #1a1a1a 63%);
          background-size: 400% 100%;
          animation: skeleton-shimmer 1.4s ease-in-out infinite;
        }

        .skeleton-card {
          position: relative;
          overflow: hidden;
          background: #0f0f0f;
        }

        .skeleton-section {
          pointer-events: none;
        }

        @keyframes skeleton-shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: 0 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skeleton-block {
            animation: none;
          }
        }

        @media (max-width: 767px) {
          .skeleton-hero-grid,
          .skeleton-about-layout,
          .contact-layout {
            flex-direction: column !important;
          }

          .about-left,
          .about-right,
          .contact-left,
          .contact-right {
            width: 100% !important;
          }

          .projects-section {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          .projects-section .skeleton-card {
            padding: 20px !important;
            min-height: 340px !important;
          }

          .projects-section .skeleton-card > div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .skeleton-hero-section .hero-visual {
            min-height: 320px;
          }
        }
      `}</style>
    </div>
  );
};

export default SkeletonLoader;
