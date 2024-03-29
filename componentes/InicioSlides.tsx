"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const imgSlideInicio = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'Relógio Inteligente'},
    { imgUrl: '/assets/images/hero-2.svg', alt: 'Bolsa'},
    { imgUrl: '/assets/images/hero-3.svg', alt: 'Lâmpada'},
    { imgUrl: '/assets/images/hero-4.svg', alt: 'Air Fryer'},
    { imgUrl: '/assets/images/hero-5.svg', alt: 'Cadeira'},
]

const InicioSlides = () => {
  return (
    <div className="hero-carousel">
        <Carousel 
        showThumbs={false}
        //autoPlay
        infiniteLoop
        //interval={2000}
        showArrows={false}
        showStatus={false}>
            {imgSlideInicio.map((img) => (
                <Image
                    src={img.imgUrl}
                    alt={img.alt}
                    width={484}
                    height={484}
                    className="object-contain"
                    key={img.alt}
                />
            ))}
        </Carousel>
        <Image
            src="/assets/icons/hand-drawn-arrow.svg"
            alt="Arrow"
            width={175}
            height={175}
            className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
        />
    </div>
  )
}

export default InicioSlides