'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

import { NavigationMenu } from '@/components/Header/NavegationMenu';
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";


type Props = {
    open: boolean;
    onClose: (open: boolean) => void;
};
const Menu = ({ open, onClose }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetContent side={'right'} className='bg-gray-700 border-0'>
                <SheetHeader>
                    <SheetTitle className='text-white'>Menu</SheetTitle>
                    <Separator className='bg-gray-300' />
                </SheetHeader>


            </SheetContent>
        </Sheet>
    )
}

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            className="h-14 flex items-center bg-gray-700 border-b border-gray-500 shadow-stone-400 shadow-lg   "
            initial={{ y: -100, }}
            animate={{ y: 0, }}
            transition={{ duration: 0.6 }}
        >
            <div className="lg:w-9/12 w-full p-6 lg:p-0 mx-auto flex justify-between items-center  ">
                <span className="text-white text-4xl"><strong className="text-2xl">{'<'}</strong>GA<strong className="text-amber-500 text-2xl">{'/>'}</strong></span>
                <NavigationMenu />
                <IoMenu onClick={() => setOpen(true)} className='text-white lg:hidden' size={30} />
            </div>

            <Menu
                open={open}
                onClose={setOpen}
            />
        </motion.header>
    )
}

export default Header;