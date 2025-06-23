import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" flex flex-col grid-cols w-full fixed top-0 left-0 z-50  ">
        <div className=" bg-black text-white  justify-between text-center gap-60 space-x-20 p-5 flex-col  ">
          <Link to="/Solutions">Solutions</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Industries">Industries</Link>
          <Link to="/Company">Company</Link>
          <Link to="/Careers">Careers</Link>

          <button className=" bg-white text-black  p-2 px-6 rounded-lg  pr-4">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <div className="w-full fixed top-0 left-0 z-50 bg-black text-white">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 p-5">
//           <Link to="/Solutions" className="hover:text-gray-300">
//             Solutions
//           </Link>
//           <Link to="/Services" className="hover:text-gray-300">
//             Services
//           </Link>
//           <Link to="/Industries" className="hover:text-gray-300">
//             Industries
//           </Link>
//           <Link to="/Company" className="hover:text-gray-300">
//             Company
//           </Link>
//           <Link to="/Careers" className="hover:text-gray-300">
//             Careers
//           </Link>
//           <button className="bg-white text-black px-6 py-2 rounded-lg">
//             Contact us
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
