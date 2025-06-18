import { motion } from "framer-motion";

function DropBounceText({ text, delay = 0, className, initial, animate }) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay,
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
}

export default DropBounceText;
