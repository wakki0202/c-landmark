/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import Image from 'next/image'



const Recruit: React.FC = () => {
  return (
      <div className='flex w-11/12 m-auto border'>
        <div className='w-4/6' style={{ position: 'relative' }} >
          <Image src={"/office.jpg"} layout={'fill'} className={"object-cover"}></Image>
        </div>
        <div className='w-2/6 py-16 px-6 bg-[#dedfd9]'>
          <h1 className='text-4xl font-bold text-center text-[#a19e8b]'>Recruit</h1>
          <p className='pt-8 text-center'>C Landmarkのメンバー<br />として一緒に働きませんか？</p>
        </div>

      </div>
  )
}

export default Recruit;