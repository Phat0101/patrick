import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className: string;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
}: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.03 }}
      >
        {text.split(" ").map((word, index) => (
          <span key={index}>
            <motion.span className="inline-block" variants={defaultAnimations}>
              {word}
            </motion.span>{" "}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;