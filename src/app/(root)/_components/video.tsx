"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Video = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clipPathProgress = useTransform(scrollYProgress, [0, 0.5], [10, 75]);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div className="relative z-auto inset-0 p-0 w-full h-full">
        <motion.div
          className="w-full h-full"
          style={{
            clipPath: useTransform(
              clipPathProgress,
              (value: number) => `circle(${value}% at 50% 50%)`
            ),
          }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/about.mp4"
            autoPlay
            loop
            muted
          />
        </motion.div>
      </div>
      <div
        className="bottom-0 z-[10] absolute w-full h-[370px]"
        style={{
          maskImage: "linear-gradient(transparent, black 85%)",
          backgroundColor: "rgb(12, 12, 12)",
        }}
      />
    </div>
  );
};
