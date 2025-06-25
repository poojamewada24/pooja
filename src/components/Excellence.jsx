// import React from "react";

// const Excellence = () => {
//   return (
//     <>
//       <div className=" p-4 sm:p-8 md:p-16 bg-black text-white">
//         <div>
//           <h1 className="text-3xl font-bold mt-4 w-80">
//             16 years of Delivering Excellence
//           </h1>
//           <p className="text-[18px] md:text-[24px] text-gray-400 mt-4">
//             Helping global enterprises with digital transformations that help
//             them grow, adapt, scale, and reinvent themselves
//           </p>
//         </div>
//         <div className=" flex flex-col md:flex-row gap-10 md:gap-40 mt-20 items-center justify-center text-center">
//           <div>
//             <h1 className="text-8xl font-bold text-zinc-400 ">$(element).slick({
//   dots: true,
//   speed: 500
// });0yrs</h1>
//             <p className="text-2xl mt-7">avg client tenure</p>
//           </div>
//           <div>
//             <h1 className="text-8xl font-bold text-zinc-400 "> $(element).slick('slickSetOption', 'speed', 5000, true);0+</h1>
//             <p className="text-2xl mt-7">solutions delivered</p>
//           </div>
//           <div>
//             <h1 className="text-8xl font-bold text-zinc-400 "> 0mn</h1>
//             <p className="text-2xl mt-7">daily digital journeys</p>
//           </div>
//           <div>
//             <h1 className="text-8xl font-bold text-zinc-400 ">0x</h1>
//             <p className="text-2xl mt-7">increase in operations growth</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Excellence;

import React from "react";
import CountUp from "react-countup";

const Excellence = () => {
  return (
    <>
      <div className="p-4 sm:p-8 md:p-16 bg-black text-white">
        <div>
          <h1 className="text-3xl font-bold mt-4 w-80">
            16 years of Delivering Excellence
          </h1>
          <p className="text-[18px] md:text-[24px] text-gray-400 mt-4">
            Helping global enterprises with digital transformations that help
            them grow, adapt, scale, and reinvent themselves
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-40 mt-20 items-center justify-center text-center">
          <div>
            <h1 className="text-8xl font-bold text-zinc-400">
              <CountUp start={0} end={95}>
                duration={2.75}
              </CountUp>
              %
            </h1>
            <p className="text-2xl mt-7">avg client tenure</p>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-zinc-400">
              {" "}
              <CountUp start={0} end={95}>
                duration={2.75}
              </CountUp>
              %
            </h1>
            <p className="text-2xl mt-7">solutions delivered</p>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-zinc-400">
              <CountUp start={0} end={95}>
                duration={2.75}
              </CountUp>
              %{" "}
            </h1>
            <p className="text-2xl mt-7">daily digital journeys</p>
          </div>
          <div>
            <h1 className="text-8xl font-bold text-zinc-400">
              <CountUp start={0} end={95}>
                duration={2.75}
              </CountUp>
              %
            </h1>
            <p className="text-2xl mt-7">increase in operations growth</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Excellence;
