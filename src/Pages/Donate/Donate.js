import React from 'react';
import donateHero from '../../Assets/donate.jpg';

const Donate = () => {
    return (
        <div>
            <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div class="mt-96 z-30 p-5 text-2xl text-white bg-black rounded">
    A place to donate to help others
  </div>
  <img src={donateHero} class="absolute z- w-auto min-w-full min-h-full max-w-none" alt='Donate'></img>
</header>
<div class="max-w-lg m-auto p-5">
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
    laoreet sem, semper molestie libero.
  </p>
  <p class="mb-4">
    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
    ipsum, id consequat nulla nunc in ligula.
  </p>
  <p class="mb-12">
    Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
    dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
    dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
    fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
    fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
    vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
    neque.
  </p>
</div>
        </div>
    );
};

export default Donate;