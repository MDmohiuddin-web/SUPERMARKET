import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import baner from "../../public/baner/baner.jpg";
import baner1 from "../../public/baner/baner1.jpg";
import baner2 from "../../public/baner/baner2.jpg";
import baner3 from "../../public/baner/baner3.jpg";
import Image from 'next/image';

const Carousels = () => {
    return (<div className='px-7 md:px-0'>
        <Carousel>
            <CarouselContent>
                {[baner, baner1, baner2, baner3].map((item, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={item}
                            className='md:w-full md:h-[450px] '
                            alt={`banner-${index}`}
                            width={1000}
                            height={500}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel></div>
    );
};

export default Carousels;
