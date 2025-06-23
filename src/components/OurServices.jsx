import React from "react";

const OurServices = () => {
  return (
    <>
      <div className="flex md:flex-row flex-wrap flex-col p-16 bg-[#0A0A0A] justify-between">
        <div className="text-white">
          <h1 className="text-3xl">Our Services</h1>
          <p className="w-90 max-w-90  mt-6  text-gray-400 text-[18px]">
            With more than a decade of experience & insight, we provide Digital,
            RPA, Quality Assurance, AI, SAP, and Technology Consulting Services
            to companies of all scales, around the globe
          </p>
          <button className=" border-3  text-[#FF7800] text-lg lg:text-xl px-1 py-1 rounded-lg mt-5 flex items-center gap-2">
            Our Approach
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <img
          className="h-50 w-50"
          src="https://static.vecteezy.com/system/resources/thumbnails/048/094/187/small_2x/man-focused-on-desktop-computer-work-png.png"
          alt=""
        />
        <img
          className="h-50 w-50"
          src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-accurate-sniper-scope-accuracy-neon-png-image_5144947.png"
          alt=""
        />
        <img
          className="h-50 w-50"
          src="https://png.pngtree.com/png-vector/20250322/ourmid/pngtree-technology-and-innovation-a-specialist-interacting-with-high-tech-smart-screen-png-image_15838002.png"
          alt=""
        />
      </div>
    </>
  );
};

export default OurServices;
