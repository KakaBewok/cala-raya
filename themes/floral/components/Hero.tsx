import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenInvitation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpened(true);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 bg-cover bg-center flex items-center justify-center origin-top"
          //   style={{
          //     backgroundImage: `url('https://slametandfatma.wedding/galeri/1.jpg')`,
          //   }}
          initial={{ y: 0 }}
          animate={isAnimating ? { y: "-100%" } : { y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <section className="relative h-screen w-full max-w-sm mx-auto">
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://slametandfatma.wedding/video/myvideo.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black/95 z-10 pointer-events-none" />

            <div className="relative z-20 h-full flex flex-col justify-around items-center text-center text-white">
              <h1 className="text-5xl font-bold font-serif">AB</h1>
              <div className="border border-red-500 flex flex-col items-center justify-center">
                <p className="text-sm mb-2">Hello</p>
                <p className="text-xl mb-6">Family and Friends</p>
                <button
                  onClick={handleOpenInvitation}
                  className="mt-4 px-6 py-2 border border-white hover:bg-white hover:text-black transition duration-300"
                >
                  OPEN INVITATION
                </button>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;
