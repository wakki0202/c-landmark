/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import Image from 'next/image'



const Recruit = () => {
  return (
    <div>
      <div id="DesktopRecruit" className="hidden md:block">
        <div className="flex w-11/12 m-auto border">
          <div className="w-4/6" style={{ position: "relative" }}>
            <Image
              src={"/office.jpg"}
              layout={"fill"}
              className={"object-cover"}
            ></Image>
          </div>
          <div className="w-2/6 py-16 px-6 bg-[#dedfd9]">
            <h1 className="text-4xl font-bold text-center text-[#a19e8b]">
              Recruit
            </h1>
            <p className="pt-8 text-center">
              C Landmarkのメンバー
              <br />
              として一緒に働きませんか？
            </p>
          </div>
        </div>
      </div>
      <div id="SmartRecruit" className="md:hidden">
        <h1 className="text-4xl font-bold text-center text-[#a19e8b] mb-8">
          Recruit
        </h1>
        <div className=" border">
          <div className=" text-center pt-3 px-4 bg-[#dedfd9]">
            <div className=" ">
              <img className="object-cover h-full " src="office.jpg" alt="ピース" />
            </div>
            <p className="pt-4 pb-8">
              C Landmarkのメンバー
              <br />
              として一緒に働きませんか？
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruit;
