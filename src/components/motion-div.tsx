"use client";

import { motion, type MotionProps } from "framer-motion";
import { forwardRef } from "react";

type MotionDivProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div ref={ref} className={className} {...props}>
      {children}
    </motion.div>
  )
);

MotionDiv.displayName = "MotionDiv";