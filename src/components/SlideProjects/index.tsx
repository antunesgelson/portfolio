'use client'
import { Button } from '@/components/ui/button';
import { PROJECTS, SIZE_ICON } from '@/data';
// @ts-ignore
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { PiArrowSquareOutLight } from 'react-icons/pi';
import { RiGithubFill } from 'react-icons/ri';

export default function SlideProjets() {
    const ref = useRef(null);
    const [selectedId, setSelectedId] = useState<number | null>(null)
    return (
        <Fullpage>
            <FullpageNavigation  />
            <FullPageSections>
                {PROJECTS.map((project, index) => (
                    <FullpageSection key={project.id} className="" >
                        <div className="h-full  grid lg:grid-cols-2   ">
                            <div className={`h-full  ${index % 2 === 0 ? 'order-1 ' : ' order-2'}`}>
                                <motion.h3
                                    className={`lg:text-4xl text-2xl lg:py-4 py-1 text-white ${index % 2 === 0 ? 'text-start ' : ' text-end'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                                    whileInView={{ opacity: 1, x: 0, }}
                                    exit={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                                    transition={{ duration: 0.4, delay: 0.1 }}>
                                    {project.title}
                                </motion.h3>

                                <div>
                                    <motion.h4
                                        className={`text-gray-200 ${index % 2 === 0 ? 'text-start ' : ' text-end'}`}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                                        whileInView={{ opacity: 1, x: 0, }}
                                        exit={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                                        transition={{ duration: 0.4, delay: 0.2 }}>
                                        {project.description}
                                    </motion.h4>

                                    <motion.div
                                        className={`flex items-center text-amber-400 text-sm gap-2 py-2 ${index % 2 === 0 ? 'justify-start ' : ' justify-end'}`}
                                        initial={{ opacity: 0, x: -10, }}
                                        whileInView={{ opacity: 1, x: 0, }}
                                        exit={{ opacity: 0, x: -10, }}
                                        transition={{ duration: 0.4, delay: 0.1 }}>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-white">Tecnologias:</span>
                                            {project.technologies.map((tech, i) => (
                                                <motion.span
                                                    key={tech + i}
                                                    initial={{ opacity: 0, x: -10, }}
                                                    whileInView={{ opacity: 1, x: 0, }}
                                                    exit={{ opacity: 0, x: -10, }}
                                                    transition={{ duration: 0.6, delay: 0.2 * i }}>
                                                    {tech},
                                                </motion.span>
                                            ))}
                                        </div>

                                    </motion.div>

                                    <motion.div
                                        className={`flex items-center gap-2 py-4 ${index % 2 === 0 ? 'justify-start ' : ' justify-end'}`}
                                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.5, }}>
                                        <Button asChild variant={'ghost'}>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                Ver código
                                                <RiGithubFill size={SIZE_ICON} />
                                            </a>
                                        </Button>

                                        <Button asChild className="flex items-center gap-2" variant={'outline'}>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                Visitar site
                                                <PiArrowSquareOutLight size={SIZE_ICON} />
                                            </a>
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                            <motion.div
                                ref={ref}
                                onClick={() => setSelectedId(project.id)}
                                className={` text-gray-200 cursor-zoom-in h-full flex  justify-center ${index % 2 === 0 ? 'lg:order-2 ' : ' order-1'} `}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: index % 2 === 0 ? 20 : -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4, delay: 0.2 }}>
                                <Image
                                    alt="Foto do projeto"
                                    width={600}
                                    height={600}
                                    src={project.image}
                                />

                            </motion.div>
                            {/* Iframe do projeto selecionado */}
                            <AnimatePresence >
                                {selectedId == project.id && (
                                    <>
                                        <div onClick={() => setSelectedId(null)} className="fixed top-0 bottom-0 left-0 right-0 bg-black/50  z-[50] cursor-pointer" />
                                        <motion.div
                                            className="fixed top-10 bottom-10 left-5 right-5 lg:top-10 lg:bottom-10 lg:left-10 lg:right-10 z-[100] "
                                            initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                            transition={{ duration: 0.6 }}>

                                            <iframe className="h-full w-full rounded-lg" src={project.link} />

                                            <motion.div
                                                className="absolute -top-10 -right-10 hover:scale-110 transition-transform duration-300"
                                                initial={{ opacity: 0, filter: 'blur(10px)' }}
                                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                                transition={{ duration: 0.6, delay: 0.4 }}>
                                                <Button
                                                    variant={'link'}
                                                    onClick={() => setSelectedId(null)}>
                                                    <IoCloseCircle className="text-red-600 bg-white rounded-full" size={30} />
                                                </Button>
                                            </motion.div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </FullpageSection>
                ))}

            </FullPageSections>
        </Fullpage>
    );
}
