import { Button } from "@/components/ui/button";
import { amalfiCoast, ninfa, poppins } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { AnimatePresence, motion } from "framer-motion";

interface OpeningScreenProps {
  isOpenInvitation: boolean;
  setIsOpenInvitation: (isOpen: boolean) => void;
}

export default function OpeningScreen({
  isOpenInvitation,
  setIsOpenInvitation,
}: OpeningScreenProps) {
  const { invitationData: data, guest } = useInvitation();

  const handleClick = () => {
    setIsOpenInvitation(true);
  };

  return (
    <AnimatePresence>
      {!isOpenInvitation && (
        <motion.div
          className=" max-w-md mx-auto fixed inset-0 z-50 flex items-center justify-center origin-top overflow-hidden bg-orange-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative h-screen w-full z-20 text-white">
            <div className="w-full absolute top-28 left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="flex flex-col items-center justify-center gap-14">
                  <p
                    className={`${ninfa.className} text-md text-neutral-600 tracking-widest font-light`}
                  >
                    The Wedding of
                  </p>
                  <h1
                    className={`leading-20 transform -rotate-[27deg] ${amalfiCoast.className} text-5xl text-rose-900 tracking-widest font-light italic`}
                  >
                    {data?.host_one_nickname} <br />{" "}
                    <span className="text-3xl">and</span>{" "}
                    {data?.host_two_nickname}
                  </h1>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={`${ninfa.className} w-full gap-4 absolute left-1/2 transform -translate-x-1/2 bottom-32 tracking-wider ${poppins.className} flex flex-col items-center justify-center`}
            >
              <p className="text-sm text-neutral-600">Kepada Yth.</p>
              <p className="text-2xl text-rose-900">{guest?.name}</p>
              <Button
                size="lg"
                onClick={handleClick}
                className="text-xs bg-rose-900 rounded-none cursor-pointer hover:bg-rose-950 text-white"
              >
                BUKA UNDANGAN
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
