import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.jpg';
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    return (
        <div className='py-5 px-10 flex justify-between'>
            <div className='flex items-center gap-5'>
                <Image src={logo} alt="logo" width={100} height={100}></Image>
                <div className='hidden md:flex'>

                    
                    {/* sand cn */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild><h2 className= ' cursor-pointer flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200'><LayoutGrid height={20} width={20}></LayoutGrid> category</h2></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>browse category</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>🍎 Fruits</DropdownMenuItem>
                            <DropdownMenuItem>🥕 Vegetables</DropdownMenuItem>
                            <DropdownMenuItem>🥛 Milk-Juice</DropdownMenuItem>
                            <DropdownMenuItem>🍞 Bakery</DropdownMenuItem>
                            <DropdownMenuItem>🧴 Personal-Care</DropdownMenuItem>
                            <DropdownMenuItem>🌾 Grains</DropdownMenuItem>
                            <DropdownMenuItem>🍗 Chicken & Egg</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
               


                </div>

                <div className='md:flex items-center gap-3 border rounded-full p-2 px-5 hidden'>
                    <Search height={20} width={20}></Search>
                    <input type="text" name="" placeholder='search' id="" className='outline-none' />
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <h2 className='flex justify-center items-center gap-2'>
                    <ShoppingBag height={20} width={20}></ShoppingBag> <span>$99</span>
                </h2>

                <Button className='my-3 text-white hover:bg-white hover:text-black'>Sign in</Button>

            </div>

        </div>
    );
};

export default Header;