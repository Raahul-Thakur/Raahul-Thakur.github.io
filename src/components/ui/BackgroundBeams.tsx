import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  ];

  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))}
        <defs>
          {paths.map((_, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + index * 1}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "linear",
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <stop stopColor="#00ffff" stopOpacity="0"></stop>
              <stop stopColor="#00ffff"></stop>
              <stop offset="1" stopColor="#0ff" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};
