import LightGallery from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

const Gallery = () =>{
  return (
    <section id="gallery" className="py-20 max-w-90 px-20" >
      <h2 className="text-3xl font-bold text-center mb-10">
        Galéria realizácií
      </h2>

      <LightGallery
        speed={500}
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames="grid md:grid-cols-3 gap-6"
      >
        {images.map((src, i) => (
          <a key={i} href={src}>
            <img
              src={src}
              className="w-full h-64 object-cover rounded-xl cursor-pointer"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
}

export default Gallery;
