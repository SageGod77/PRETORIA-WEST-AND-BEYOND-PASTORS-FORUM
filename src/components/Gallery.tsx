import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  '/imgs/img1.jpg',
  '/imgs/img2.jpg',
  '/imgs/img3.jpg',
  '/imgs/img4.jpg',
  '/imgs/img5.jpg',
  '/imgs/img6.jpg',
  '/imgs/img7.jpg',
  '/imgs/img8.jpg',
  '/imgs/img9.jpg',
  '/imgs/tm-img-01.jpg',
  '/imgs/tm-img-02.jpg',
  '/imgs/tm-img-03.jpg',
  '/imgs/tm-img-04.jpg',
  '/imgs/tm-img-05.jpg',
  '/imgs/tm-img-06.jpg',
  '/imgs/tm-img-07.jpg',
  '/imgs/tm-img-08.jpg',
  '/imgs/tm-img-09.jpg',
  import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  '/imgs/img1.jpg',
  '/imgs/img2.jpg',
  '/imgs/img3.jpg',
  '/imgs/img4.jpg',
  '/imgs/img5.jpg',
  '/imgs/img6.jpg',
  '/imgs/img7.jpg',
  '/imgs/img8.jpg',
  '/imgs/img9.jpg',
  '/imgs/tm-img-01.jpg',
  '/imgs/tm-img-02.jpg',
  '/imgs/tm-img-03.jpg',
  '/imgs/tm-img-04.jpg',
  '/imgs/tm-img-05.jpg',
  '/imgs/tm-img-06.jpg',
  '/imgs/tm-img-07.jpg',
  '/imgs/tm-img-08.jpg',
  '/imgs/tm-img-09.jpg',
  '/imgs/tm-img-10.jpg',
  '/imgs/tm-img-11.jpg',
  '/imgs/tm-img-12.jpg',
  '/imgs/tm-img-13.jpg',
  '/imgs/tm-img-14.jpg',
  '/imgs/tm-img-15.jpg',
  '/imgs/tm-img-16.jpg',
  '/imgs/tm-img-17.jpg',
  '/imgs/tm-img-18.jpg',
  '/imgs/tm-img-19.jpg',
  '/imgs/tm-img-20.jpg',
  '/imgs/tm-img-21.jpg',
  '/imgs/tm-img-22.jpg',
  '/imgs/tm-img-23.jpg',
  '/imgs/tm-img-24.jpg',
  '/imgs/tm-img-25.jpg',
  '/imgs/tm-img-26.jpg',
  '/imgs/tm-img-27.jpg',
  '/imgs/tm-img-28.jpg',
  '/imgs/tm-img-29.jpg',
  '/imgs/tm-img-30.jpg',
  '/imgs/tm-img-31.jpg',
  '/imgs/tm-img-32.jpg',
  '/imgs/tm-img-33.jpg',
  '/imgs/tm-img-34.jpg',
  '/imgs/tm-img-35.jpg',
  '/imgs/tm-img-36.jpg',
  '/imgs/tm-img-37.jpg',
  '/imgs/tm-img-38.jpg',
  '/imgs/tm-img-39.jpg',
  '/imgs/tm-img-40.jpg',
  '/imgs/tm-img-41.jpg',
  '/imgs/tm-img-42.jpg',
  '/imgs/tm-img-43.jpg',
  '/imgs/tm-img-44.jpg',
  '/imgs/tm-img-45.jpg',
  '/imgs/tm-img-46.jpg'


  
];

export default function MyComponent() {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-20">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img
              className="w-full h-40 max-w-full rounded-lg object-cover object-center cursor-pointer"
              src={item}
              alt={`gallery-photo-${index}`}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}

  import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  '/imgs/img1.jpg',
  '/imgs/img2.jpg',
  '/imgs/img3.jpg',
  '/imgs/img4.jpg',
  '/imgs/img5.jpg',
  '/imgs/img6.jpg',
  '/imgs/img7.jpg',
  '/imgs/img8.jpg',
  '/imgs/img9.jpg',
  '/imgs/tm-img-01.jpg',
  '/imgs/tm-img-02.jpg',
  '/imgs/tm-img-03.jpg',
  '/imgs/tm-img-04.jpg',
  '/imgs/tm-img-05.jpg',
  '/imgs/tm-img-06.jpg',
  '/imgs/tm-img-07.jpg',
  '/imgs/tm-img-08.jpg',
  '/imgs/tm-img-09.jpg',
  '/imgs/tm-img-10.jpg',
  '/imgs/tm-img-11.jpg',
  '/imgs/tm-img-12.jpg',
  '/imgs/tm-img-13.jpg',
  '/imgs/tm-img-14.jpg',
  '/imgs/tm-img-15.jpg',
  '/imgs/tm-img-16.jpg',
  '/imgs/tm-img-17.jpg',
  '/imgs/tm-img-18.jpg',
  '/imgs/tm-img-19.jpg',
  '/imgs/tm-img-20.jpg',
  '/imgs/tm-img-21.jpg',
  '/imgs/tm-img-22.jpg',
  '/imgs/tm-img-23.jpg',
  '/imgs/tm-img-24.jpg',
  '/imgs/tm-img-25.jpg',
  '/imgs/tm-img-26.jpg',
  '/imgs/tm-img-27.jpg',
  '/imgs/tm-img-28.jpg',
  '/imgs/tm-img-29.jpg',
  '/imgs/tm-img-30.jpg',
  '/imgs/tm-img-31.jpg',
  '/imgs/tm-img-32.jpg',
  '/imgs/tm-img-33.jpg',
  '/imgs/tm-img-34.jpg',
  '/imgs/tm-img-35.jpg',
  '/imgs/tm-img-36.jpg',
  '/imgs/tm-img-37.jpg',
  '/imgs/tm-img-38.jpg',
  '/imgs/tm-img-39.jpg',
  '/imgs/tm-img-40.jpg',
  '/imgs/tm-img-41.jpg',
  '/imgs/tm-img-42.jpg',
  '/imgs/tm-img-43.jpg',
  '/imgs/tm-img-44.jpg',
  '/imgs/tm-img-45.jpg',
  '/imgs/tm-img-46.jpg'


  
];

export default function MyComponent() {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-20">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img
              className="w-full h-40 max-w-full rounded-lg object-cover object-center cursor-pointer"
              src={item}
              alt={`gallery-photo-${index}`}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}


  
];

export default function MyComponent() {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-20">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img
              className="w-full h-40 max-w-full rounded-lg object-cover object-center cursor-pointer"
              src={item}
              alt={`gallery-photo-${index}`}
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
