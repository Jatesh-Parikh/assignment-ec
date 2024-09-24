import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Mesh from "../../assets/mesh.svg";

const Hero = () => {
  return (
    <motion.section
      className="relative mx-auto max-w-[1440px] px-8 py-4 min-h-screen grid place-items-center mb-20"
      initial={{ y: 0 }}
      animate={{ y: -100 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <img
        src={Mesh}
        alt="mesh"
        className="absolute md:inset-0 opacity-15 flex items-center justify-center"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold font-serif text-5xl lg:text-7xl py-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Bird
        </h1>
        <h3 className="font-extralight text-xl md:text-3xl text-balance">
          Build a brand and start selling in seconds.
        </h3>
        <div className="flex gap-4 py-8">
          <Button variant="outline">Sign In</Button>
          <Button>Register</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
