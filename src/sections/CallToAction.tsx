// "use client";
import { useRef } from "react";
import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { useScroll, useTransform, motion } from "framer-motion";

export const CallToAction = () => {
  const cylinderRef = useRef(null);
  const { scrollYProgress: cylinderScroll } = useScroll({
    target: cylinderRef,
    offset: ["start end", "end start"],
  });
  const cylinderRotate = useTransform(cylinderScroll, [0, 1], [45, -45]);
  const cuboidRef = useRef(null);
  const { scrollYProgress: cuboidScroll } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });
  const cuboidRotate = useTransform(cuboidScroll, [0, 1], [45, -45]);
  return (
    <section className="py-60 overflow-hidden">
      <div className="container">
        <div className="relative z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[700px]" size={700} duration={10} />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon
              className="size-[1100px]"
              size={1100}
              reverse
              duration={15}
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]" animate>
              <motion.img
                src="/assets/images/cuboid.png"
                alt="Cuboid 3D Image"
                className="size-[140px]"
                ref={cuboidRef}
                style={{
                  rotate: cuboidRotate,
                }}
              />
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]" animate>
              <motion.img
                src="/assets/images/cylinder.png"
                alt="Cylinder 3D Image"
                className="size-[140px]"
                ref={cylinderRef}
                style={{
                  rotate: cylinderRotate,
                }}
              />
            </Circle>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-center text-xl lg:text-2xl mt-8 text-zinc-400 max-w-sm mx-auto">
            Start building using blockchain technology, with Blockforge.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>get started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
