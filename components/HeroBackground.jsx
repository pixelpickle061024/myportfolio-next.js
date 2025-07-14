import Image from "next/image";
import { motion } from "framer-motion";

import Mountain1 from "../public/assets/background/mountain1.svg";
import Mountain2 from "../public/assets/background/mountain2.svg";
import Mountain3 from "../public/assets/background/mountain3.svg";
import Mountain5 from "../public/assets/background/mountain5.svg";
import HeroSvg from "../public/assets/background/hero-wave.svg";

function HeroBackground() {
  return (
    <div className="absolute top-0 w-full h-[100svh] overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2e1a47] via-[#1a1a2e] to-[#16213e]"
        animate={{
          background: [
            "linear-gradient(to bottom right, #2e1a47, #1a1a2e, #16213e)",
            "linear-gradient(to bottom right, #1a1a2e, #16213e, #2e1a47)",
            "linear-gradient(to bottom right, #16213e, #2e1a47, #1a1a2e)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(128, 77, 238, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Mountain layers with parallax effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Mountain1 className="w-full h-[446px] wave top-[170px] opacity-60" />
        <Mountain2 className="w-full h-[464px] wave top-[160px] opacity-70" />
        <div className="w-full h-[1503px] wave top-[-200px]">
          <Image
            src={"/assets/background/blur-layer.png"}
            alt="blur-layer"
            fill={true}
            className="opacity-40"
          />
        </div>
        <Mountain3 className="w-full h-[408px] wave top-[347px] opacity-50" />
        <Mountain5 className="w-full h-[867px] wave md:top-[450px] top-[300px] opacity-60" />
      </motion.div>

      {/* Bottom wave with gradient */}
      <HeroSvg className="md:w-full w-full h-[1200px] wave md:top-[100dvh] md:left-0 top-[520px] text-[#1a1a2e]" />
    </div>
  );
}

export default HeroBackground;
