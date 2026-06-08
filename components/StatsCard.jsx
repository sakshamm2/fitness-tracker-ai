import { motion } from "framer-motion";

export default function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="card"
    >
      {icon}
      <h3>{title}</h3>
      <h2>{value}</h2>
    </motion.div>
  );
}