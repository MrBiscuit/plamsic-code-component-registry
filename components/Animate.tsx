import { motion } from "framer-motion";

export function Motion({
  from,
  to,
  isChildren = false,
  children,
  className,
  whileHover,
  control,
  whileInView,
  whileTap,
}: {
  from: {};
  to: {};
  whileHover?: {};
  whileTap?: {};
  whileInView?: {};
  control: any;
  isChildren: boolean;
  children: any;
  className: string;
}) {

  let variants = {
    from,
    to,

  };
  if (isChildren) {
    return (
      <motion.div
        variants={variants}
        className={className}
        whileHover={whileHover}
        whileTap={whileTap}
        whileInView={whileInView}
      >
        {children}
      </motion.div>
    );
  } else if (control) {
    return (
      <motion.div
        initial="from"
        variants={variants}
        animate={control}
        className={className}
      >
        {children}
      </motion.div>
    );
  } else
    return (
      <motion.div
        variants={variants}
        initial="from"
        animate="to"
        className={className}
        whileHover={whileHover}
        whileTap={whileTap}
        whileInView={whileInView}
      >
        {children}
      </motion.div>
    );
}