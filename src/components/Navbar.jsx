// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <div className=" flex flex-col grid-cols w-full fixed top-0 left-0 z-50  ">
//         <div className=" bg-black text-white  justify-between text-center gap-60 space-x-20 p-5 flex-col  ">
//           <Link to="/Solutions">Solutions</Link>
//           <Link to="/Services">Services</Link>
//           <Link to="/Industries">Industries</Link>
//           <Link to="/Company">Company</Link>
//           <Link to="/Careers">Careers</Link>

//           <button className=" bg-white text-black  p-2 px-6 rounded-lg  pr-4">
//             Contact us
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const toggleMenu = () => setClick(!click);

  const navItems = [
    { name: "Solutions", path: "/Solutions" },
    { name: "Services", path: "/Services" },
    { name: "Industries", path: "/Industries" },
    { name: "Company", path: "/Company" },
    { name: "Careers", path: "/Careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 items-center text-[18px]">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <li className="hover:text-red-500 cursor-pointer">{item.name}</li>
            </Link>
          ))}
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </ul>

        {/* Mobile Button */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {click ? "×" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="lg:hidden bg-slate-950 w-full px-6 pb-6">
          <ul className="flex flex-col text-center space-y-4 text-[18px]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setClick(false)}
              >
                <li className="py-2 hover:bg-slate-800 rounded">{item.name}</li>
              </Link>
            ))}
            <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
