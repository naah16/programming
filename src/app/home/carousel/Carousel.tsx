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
import { Card, CardContent } from "@/components/ui/card";

export const CarouselPlugin = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000 })
  )

  const images = [
    { src: "/img/placeholder.svg", alt: "Imagem 1 do carrossel" },
    { src: "/img/placeholder.svg", alt: "Imagem 2 do carrossel" },
    { src: "/img/placeholder.svg", alt: "Imagem 3 do carrossel" },
    { src: "/img/placeholder.svg", alt: "Imagem 4 do carrossel" }
  ];

  return (
    <Carousel 
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="mx-[50px]"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={200}
                  className="opacity-80"
                  priority
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};