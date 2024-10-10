'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";

import { NavigationMenu } from '@/components/Header/NavegationMenu';
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { BsSend } from 'react-icons/bs';
import { FaRoad } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { VscBook } from "react-icons/vsc";
type Props = {
    open: boolean;
    onClose: (open: boolean) => void;
};
const Menu = ({ open, onClose }: Props) => {

    const handleSmoothScroll = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            onClose(false);
        }
    };

    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetContent side={'right'} className='bg-gray-700 border-0 outline-none'>
                <SheetHeader>
                    <SheetTitle className='text-white'>Menu</SheetTitle>
                    <Separator className='bg-gray-300' />
                </SheetHeader>


                <nav>
                    <ul className="text-white space-y-2 mt-4">
                        <li
                            className="hover:text-amber-500 duration-300 flex items-center gap-2"
                            onClick={(e) => handleSmoothScroll(e, 'skills')}>
                            <VscBook />
                            Conhecimento
                        </li>
                        <li
                            className="hover:text-amber-500 duration-300 flex items-center gap-2"
                            onClick={(e) => handleSmoothScroll(e, 'projects')}>
                            <GoProjectSymlink />
                            Projetos
                        </li>
                        <li
                            className="hover:text-amber-500 duration-300 flex items-center gap-2"
                            onClick={(e) => handleSmoothScroll(e, 'experience')}>
                            <FaRoad />
                            Experiência
                        </li>
                        <li
                            className="hover:text-amber-500 duration-300 flex items-center gap-2"
                            onClick={(e) => handleSmoothScroll(e, 'contact')}>
                            <BsSend />
                            Contato
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="h-14 flex items-center bg-gray-700 border-b border-gray-500 shadow-stone-400 shadow-lg z-10">
            <div className=" w-full p-6 lg:p-0 2xl:w-8/12  lg:w-10/12  mx-auto flex justify-between items-center">
                <div className="text-white text-4xl flex  items-end">
                    <motion.div
                        className="text-2xl font-bold"
                        initial={{ x: -100, filter: 'blur(50px)' }}
                        animate={{ x: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3 }}>
                        {'<'}
                    </motion.div>
                    <motion.span
                        initial={{ y: -50, filter: 'blur(10px)' }}
                        animate={{ y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5 }}>
                        GA
                    </motion.span>
                    <motion.div
                        className="text-amber-500 text-2xl font-bold"
                        initial={{ x: 100, filter: 'blur(50px)' }}
                        animate={{ x: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.3 }}>
                        {'/>'}
                    </motion.div>
                </div>
                <NavigationMenu />
                <IoMenu
                    size={30}
                    onClick={() => setOpen(true)}
                    className='text-white lg:hidden'
                />
            </div>

            <Menu open={open} onClose={setOpen} />
        </header>
    )
}

export default Header;