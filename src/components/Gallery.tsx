import LightGallery from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import img1 from "../assets/stroj.png"
import img2 from "../assets/cistenie.png"
import img5 from "../assets/pred_cistenim.png"
import img6 from "../assets/po_cisteni.png"
import img3 from "../assets/proces_cistenia1.png"
import img4 from "../assets/proces_cistenia2.png"


const images = [
  {src: img1, alt:"Otomatic platinum AI"},
   {src: img2, alt:"Proces čistenia"},
   {src: img3, alt:"Proces čistenia"},
   {src: img4, alt:"Proces čistenia"},
   {src: img5, alt:"Pred vyčistením"},
   {src: img6, alt:"Po vyčistení"},
];

const Gallery = () =>{
  return (
    <section id="gallery" className="py-20 container mx-auto px-4" >
      <h2 className="text-3xl font-bold text-center mb-10">
        Galéria realizácií
      </h2>

      <LightGallery
        speed={500}
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames="grid md:grid-cols-3 gap-6"
      >
        {images.map((image, i) => (
          <a key={i} href={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-64 object-cover rounded-xl cursor-pointer"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
}

export default Gallery;
