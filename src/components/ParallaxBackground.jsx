import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const layer4Y = useTransform(x, [0, 0.5], ["0%", "10%"]);
  const layer3Y = useTransform(x, [0, 0.5], ["0%", "47%"]);
  const layer2X = useTransform(x, [0, 0.5], ["0%", "-30%"]);
  const layer1Y = useTransform(x, [0, 0.5], ["0%", "-30%"]);

  return (
    <section className="absolute inset-0">
      <div className="relative h-screen overflow-y-hidden">
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/layer-4.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/layer-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer3Y,
          }}
        />
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/layer-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: layer2X,
          }}
        />
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/layer-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;