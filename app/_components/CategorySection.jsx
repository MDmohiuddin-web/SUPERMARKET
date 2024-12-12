import BlurFade from '@/components/ui/blur-fade';
import { Card } from '@/components/ui/card';
import GradualSpacing from '@/components/ui/gradual-spacing';
import { data } from '@/lib/Data';

import React from 'react';

const CategorySection = () => {
    return (
        <div className='py-5 '>
            <GradualSpacing  className="font-display text-center  text-4xl font-bold -tracking-widest  text-primary dark:text-white md:leading-[5rem]" text={`Shop by Category`}></GradualSpacing>
            <BlurFade delay={0.30} inView>
                <div className='grid grid-cols-2 md:grid-cols-4  xl:grid-cols-7 gap-3 py-5 '>

                    {
                        data.map((item, index) => (
                            <Card key={index} className='flex justify-center items-center flex-col px-5 py-3 gap-4 rounded-md w-[180px] hover:shadow-xl duration-300 '>


                                <h2 className='text-6xl'>{item.icon}</h2>
                                <h4 className='max-text-2xl'>{item.category}</h4>

                            </Card>
                        ))
                    }


                </div>
            </BlurFade>


        </div>
    );
};

export default CategorySection;




