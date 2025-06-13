"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero1 = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between min-h-screen px-6 md:px-20 py-16 -mt-11 border-b">
      
      {/* Left: Heading */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-start text-left z-10 mt-10 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          variants={textVariants}
          custom={1}
        >
          Hey I&apos;m <span className="text-primary">Stazz</span>
        </motion.h1>

        <motion.h2
          className="text-2xl font-bold text-primary"
          variants={textVariants}
          custom={2}
        >
          <span className="text-gray-300">I make </span>
          <Typewriter
            words={["Beats That Knock.", "Mixes That Shine.", "Masters That Hit."]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex justify-between gap-3 mt-10 flex-wrap"
          variants={textVariants}
          custom={3}
        >
          <Link href="/Mix" className="cursor-pointer border p-3 rounded-md hover:bg-accent font-semibold">
            <button className="flex items-center gap-2 cursor-pointer">
              Explore My Mix
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/Beats" className="cursor-pointer border p-3 rounded-md hover:bg-accent font-semibold">
            <button className="flex items-center gap-2 cursor-pointer">
              Explore My Beats
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right: Animated Image Flip */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end items-center"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/img/profile.jpg"
            alt="Stazz Profile"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero1;
