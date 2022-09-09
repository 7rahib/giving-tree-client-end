import React from 'react';
import gallery1 from '../../Assets/gallery/gallery1.jpg';
import gallery2 from '../../Assets/gallery/gallery2.jpg';
import gallery3 from '../../Assets/gallery/gallery3.jpg';
import gallery4 from '../../Assets/gallery/gallery4.jpg';
import gallery5 from '../../Assets/gallery/gallery5.jpg';
import gallery6 from '../../Assets/gallery/gallery6.jpg';

const Gallary = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our recent projects</h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">People who help others are happier than people who doesn’t. Many research and data shows us even little kids become happy when they give some of their things to another.</p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery1} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery2} />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src={gallery4} />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block" src={gallery3} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery5} />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;