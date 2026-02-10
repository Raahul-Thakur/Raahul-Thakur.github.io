import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  onClick?: () => void;
  [key: string]: unknown;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex items-center justify-center p-[2px] overflow-hidden",
        containerClassName
      )}
      onClick={onClick}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,255,255,0.8) 0%, rgba(255,255,255,0.8) 50%, rgba(0,255,255,0.8) 100%)",
        }}
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,255,255,1) 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: hovered ? ["0% 0%", "200% 0%"] : "0% 0%",
        }}
        transition={{
          duration: duration,
          repeat: hovered ? Infinity : 0,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative bg-black z-10 px-6 py-3 group-hover:bg-black/90 transition-colors duration-200",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};
