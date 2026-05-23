import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    number: "01",
    category: "FULL-STACK APP",
    title: "E-Commerce Platform",
    live: "https://e-mart-website.netlify.app/",
  },
  {
    number: "02",
    category: "REAL-TIME APP",
    title: "Chat Application",
    live: "#",
  },
  {
    number: "03",
    category: "SAAS PRODUCT",
    title: "Task Manager",
    live: "#",
  },
]

const Projects = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section style={{
      background: '#0C0C0C',
      borderRadius: '60px 60px 0 0',
      marginTop: '-56px',
      position: 'relative',
      zIndex: 10,
      padding: '96px 48px 200px',
    }}>
      <h2 style={{
        fontFamily: 'Satoshi, sans-serif',
        fontSize: '60px',
        fontWeight: '700',
        color: '#F0F0F0',
        letterSpacing: '-0.03em',
        marginBottom: '80px',
      }}>
        Projects
      </h2>

      {/* Sticky container */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          height: `${projects.length * 100}vh`,
        }}
      >
        {projects.map((project, index) => (
          <StickyCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
const StickyCard = ({ project, index, total, scrollYProgress }) => {
  const start = index / total
  const end = (index + 1) / total

  // Alternating tilt — even: left, odd: right
  const tiltDirection = index % 2 === 0 ? -1 : 1

  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [tiltDirection * 1.5, tiltDirection * 3]
  )

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1 - index * 0.015, 1 - index * 0.015 - 0.02]
  )

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [index * -10, index * -10 - 10]
  )

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: '80px',
        height: '82vh',
        borderRadius: '28px',
        border: '1px solid #1e1e1e',
        background: '#0f0f0f',
        padding: '40px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        rotate,
        scale,
        y,
        transformOrigin: 'top center',
        zIndex: index,
      }}
    >
      {/* TOP ROW */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '28px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '80px',
            fontWeight: '800',
            color: '#f0f0f0',
            lineHeight: '1',
          }}>
            {project.number}
          </div>
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.18em',
              color: '#7C3AED',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}>
              {project.category}
            </div>
            <div style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '24px',
              fontWeight: '700',
              color: '#F0F0F0',
              letterSpacing: '-0.02em',
            }}>
              {project.title}
            </div>
          </div>
        </div>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          style={{
            border: '1.5px solid #2a2a2a',
            borderRadius: '999px',
            padding: '10px 24px',
            color: '#888',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono, monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            textDecoration: 'none',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#7C3AED'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#2a2a2a'
            e.currentTarget.style.color = '#888'
          }}
        >
          Live Project
        </a>
      </div>

      {/* BOTTOM ROW */}
      <div style={{
        display: 'flex',
        gap: '14px',
        flex: 1,
        minHeight: 0,
      }}>
        <div style={{
          width: '38%',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{
            flex: '1',
            background: '#161616',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2a2a2a',
            fontSize: '9px',
            fontFamily: 'JetBrains Mono, monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            preview
          </div>
          <div style={{
            flex: '1.4',
            background: '#161616',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2a2a2a',
            fontSize: '9px',
            fontFamily: 'JetBrains Mono, monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            preview
          </div>
        </div>

        <div style={{
          width: '62%',
          background: '#161616',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2a2a2a',
          fontSize: '9px',
          fontFamily: 'JetBrains Mono, monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          main preview
        </div>
      </div>
    </motion.div>
  )
}
export default Projects