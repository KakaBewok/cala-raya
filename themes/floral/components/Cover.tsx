import { Button } from "@/components/ui/button";
import { optivaground } from "@/fonts/fonts";
import { MoveDown } from "lucide-react";

// const Cover = () => {
//   return (
//     <div
//       className="h-screen bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: `url('https://slametandfatma.wedding/galeri/2.jpg')`,
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-black/55 z-10 pointer-events-none" />
//       <div className="relative h-full  max-w-sm mx-auto">
//         <div className="h-full relative z-20 flex flex-col justify-between items-center text-white">
//           <div className="tracking-wider mt-28 flex flex-col items-center justify-center">
//             <p className="text-sm mb-2">#SlametFatmaDay</p>
//             <p className={`${optivaground.className} text-4xl mb-2`}>
//               Slamet & Fatma
//             </p>
//             <p className="text-sm">01 . 06 . 2025</p>
//           </div>
//           <Button className="mb-5 z-50 w-7 h-7 bg-neutral-600/20 text-white cursor-pointer rounded-full transition animate-bounce flex items-center justify-center">
//             <MoveDown size={11} className="animate-pulse" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

const Cover = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://slametandfatma.wedding/galeri/2.jpg')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-black/55 z-10 pointer-events-none" />

      {/* Konten */}
      <div className="relative z-20 h-full w-full max-w-sm mx-auto flex flex-col justify-between items-center text-white">
        <div className="tracking-wider mt-28 flex flex-col items-center justify-center">
          <p className="text-sm mb-2">#SlametFatmaDay</p>
          <p className={`${optivaground.className} text-4xl mb-2`}>
            Slamet & Fatma
          </p>
          <p className="text-sm">01 . 06 . 2025</p>
        </div>

        <Button className="mb-5 w-7 h-7 bg-neutral-600/20 text-white cursor-pointer rounded-full transition animate-bounce flex items-center justify-center">
          <MoveDown size={11} className="animate-pulse" />
        </Button>
      </div>
    </div>
  );
};

export default Cover;

// const Cover = () => {
//   return (
//     <div className="h-full overflow-y-hidden">
//       <div
//         className="bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: `url('https://slametandfatma.wedding/galeri/2.jpg')`,
//         }}
//       >
//         <div className="relative h-screen w-full max-w-sm mx-auto">
//           <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-black/55 z-10 pointer-events-none" />

//           <div className="h-full relative z-20 flex flex-col justify-between items-center text-white">
//             <div
//               className={`tracking-wider mt-28 flex flex-col items-center justify-center`}
//             >
//               <p className={`text-sm mb-2`}>#SlametFatmaDay</p>
//               <p className={`${optivaground.className} text-4xl mb-2`}>
//                 Slamet & Fatma
//               </p>
//               <p className={`text-sm`}>01 . 06 . 2025</p>
//             </div>
//             <Button className="mb-5 z-50 w-7 h-7 bg-neutral-600/20 text-white cursor-pointer rounded-full transition animate-bounce flex items-center justify-center">
//               <MoveDown size={11} className="animate-pulse" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cover;
