'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

export const CarouselPlugin = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [
    { src: "/img/carousel/code-1.jpg", alt: "Imagem de código" },
    { src: "/img/carousel/code-2.jpg", alt: "Imagem de ajuda de código" },
    { src: "/img/carousel/work-1.jpg", alt: "Imagem de mesa de trabalho" },
    { src: "/img/carousel/work-2.jpg", alt: "Imagem do homem olhando um computador" }
  ];

  return (
    <Carousel 
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="mx-[50px] py-6"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="lg:basis-1/3">
            <Image 
              src={image.src}
              alt={image.alt}
              width={400}
              height={200}
              layout="responsive"
              className="opacity-80"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  );
};