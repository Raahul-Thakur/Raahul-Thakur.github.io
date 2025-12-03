import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative p-[1px] overflow-hidden",
        containerClassName
      )}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,255,255,0) 0%, rgba(0,255,255,1) 50%, rgba(0,255,255,0) 100%)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative bg-black border-2 border-cyan-400",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
