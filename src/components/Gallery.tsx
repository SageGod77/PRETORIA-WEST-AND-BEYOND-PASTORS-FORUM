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
