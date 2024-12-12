"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import GradualSpacing from '@/components/ui/gradual-spacing';
import { data } from '@/lib/Data';
import Image from 'next/image';
import Pageant from './Pageant';



const ITEMS_PER_PAGE = 10;

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Flattening all items into a single array
  const allItems = data.flatMap(category => category.items);

  // Get items for the current page
  const currentItems = allItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <GradualSpacing className="font-display text-center text-4xl font-bold -tracking-widest text-primary dark:text-white md:leading-[5rem]" text={`Our Popular Products`} />

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 justify-center items-center my-10'>
        {currentItems.map((item, index) => (
          <Card key={index} className="overflow-hidden flex flex-col justify-center items-center  hover:shadow-xl duration-300">
            <Image src={item.img} alt={item.name} width={200} height={200} className='w-full h-52 object-cover rounded-md' />
            <div className='py-3 px-2 flex flex-col justify-start w-full items-center'>
              <h2 className='text-xl'>{item.name}</h2>
              <h4 className='flex gap-2 font-bold'><span>${item.discountPrice}</span> <span className='line-through text-gray-300'>${item.price} </span></h4>
            </div>
            <Button className='my-3 text-white hover:bg-white hover:text-black'>Add to cart</Button>
          </Card>
        ))}
      </div>

      <Pageant
        totalItems={allItems.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Product;
