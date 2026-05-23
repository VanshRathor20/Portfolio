import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import {
  staggerContainerFast,
  fadeSlideUp,
  badgeHover,
  viewportOnce,
} from "../motionVariants";

const SectionHeading = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold">{title}</h2>
    <div className="w-16 h-1 bg-accent mt-2" />
  </div>
);

const TECH_GROUPS = [
  {
    title: "Frontend",
    items: [
      { Icon: FaReact, label: "React", className: "text-[#61DAFB]" },
      { Icon: SiNextdotjs, label: "Next.js", className: "text-white" },
      { Icon: SiTypescript, label: "TypeScript", className: "text-[#3178C6]" },
      { Icon: SiTailwindcss, label: "Tailwind", className: "text-accent" },
      { Icon: SiRedux, label: "Redux", className: "text-[#764ABC]" },
    ],
  },
  {
    title: "Backend",
    items: [
      { Icon: FaNodeJs, label: "Node.js", className: "text-[#339933]" },
      { Icon: SiExpress, label: "Express", className: "text-white" },
      { Icon: SiGraphql, label: "GraphQL", className: "text-[#E10098]" },
      { Icon: SiSocketdotio, label: "Socket.io", className: "text-accent" },
    ],
  },
  {
    title: "Database",
    items: [
      { Icon: SiMongodb, label: "MongoDB", className: "text-[#47A248]" },
      { Icon: SiPostgresql, label: "PostgreSQL", className: "text-[#4169E1]" },
      { Icon: SiMysql, label: "MySQL", className: "text-[#4479A1]" },
      { Icon: SiRedis, label: "Redis", className: "text-[#DC382D]" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { Icon: FaGitAlt, label: "Git", className: "text-[#F05032]" },
      { Icon: SiDocker, label: "Docker", className: "text-[#2496ED]" },
      { Icon: FaAws, label: "AWS", className: "text-[#FF9900]" },
      { Icon: SiVercel, label: "Vercel", className: "text-white" },
      { Icon: SiPostman, label: "Postman", className: "text-[#FF6C37]" },
    ],
  },
];

const TechBadge = ({ Icon, label, className }) => (
  <motion.div
    variants={fadeSlideUp}
    {...badgeHover}
    className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 cursor-default"
  >
    <Icon className={`text-2xl flex-shrink-0 ${className}`} />
    <span className="text-sm text-gray-300 font-medium">{label}</span>
  </motion.div>
);

const TechStack = () => {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6 bg-surface/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading title="My Arsenal" />

        <div className="space-y-10">
          {TECH_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-accent font-mono text-sm mb-4 uppercase tracking-wider">
                {group.title}
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainerFast}
                initial="initial"
                whileInView="animate"
                viewport={viewportOnce}
              >
                {group.items.map((item) => (
                  <TechBadge key={item.label} {...item} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
