import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      {/* Flex container for text and image */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-6'> {/* Added gap class */}
        <div className='md:w-1/2 mb-4'>
          <h1 className='text-3xl font-bold mb-4 text-slate-800'>
            A global forerunner in smart charging solutions
          </h1>
          <p className='mb-4 text-slate-700'>
            GridWallet is a leading platform for managing financial transactions in the V2G network, empowering EV owners to efficiently sell, store, and manage energy. Our experienced team is committed to making energy transactions smooth and hassle-free.
          </p>
          <p className='mb-4 text-slate-700'>
            Our mission is to help users maximize the value of their energy through expert guidance, personalized tools, and an in-depth understanding of energy markets. Whether you're supplying energy to the grid or managing your energy storage, we're here to support you at every step.
          </p>
          <p className='mb-4 text-slate-700'>
            With deep expertise in energy management and V2G transactions, we are dedicated to providing top-tier service to all our users. We believe that energy management should be both rewarding and straightforward, and we strive to make that a reality for everyone who uses GridWallet.
          </p>
        </div>

        {/* Image Section */}
        <div className='md:w-1/2'>
          <img
            src='https://www.virta.global/hs-fs/hubfs/Website%20assets%202024/Photos%20and%20images/A%20-%20VISION/A2%20-%20B2B%20BRANDING%20(1-1)/confident-woman-electric-vehicle-wind-turbine-sunrise.webp?width=1920&name=confident-woman-electric-vehicle-wind-turbine-sunrise.webp'
            alt='Smart Charging Solutions'
            className='w-full h-auto rounded-lg shadow-md'
          />
        </div>
      </div>

      {/* Video Section */}
      <div className='mt-10'>
        <h2 className='text-2xl font-semibold text-slate-600 mb-4'>Explaining V2G</h2>
        <iframe
          width='100%'
          height='600'
          src='https://www.youtube.com/embed/koZLTi34Y2E'
          title='This is V2G'
          className='rounded-lg shadow-md'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
