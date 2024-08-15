'use client'
import { motion } from "framer-motion";
import { BsSend } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { SIZE_ICON, SOCIAL_MEDIA_BAGDE } from "../../data";
import { Button } from "../ui/button";

type Props = {
    link: string,
    Icon: IconType
}
const SocialMediaBagde = ({ link, Icon }: Props) => {
    return (
        <a href={link}
            target="_blank"
            className="group flex flex-col items-center mt-1 hover:text-amber-500">
            <div className="p-1 border border-gray-500 rounded-lg group-hover:border-amber-500 duration-500 ">
                <Icon className="text-gray-200 group-hover:text-amber-500 duration-500 " size={SIZE_ICON} />
            </div>
        </a>
    )
}
const Contact = () => {
    return (
        <section id="contact" className="bg-gray-700 flex justify-center items-center 2xl:min-h-[50vh] lg:min-h-[70vh] " >
            <div className="p-6 lg:p-0 2xl:w-8/12  lg:w-10/12  mx-auto ">
                <motion.h3
                    className="text-amber-500  text-end "
                    initial={{ opacity: 0, x: 20, }}
                    whileInView={{ opacity: 1, x: 0, }}
                    exit={{ opacity: 0, x: 20, }}
                    transition={{ duration: 0.4, delay: 0.2 }}>
                    ../contato
                </motion.h3>

                <div className="flex items-center justify-between lg:gap-10 gap-3 lg:pb-8 pb-2 ">
                    <div className="w-full  bg-gray-400 h-[1px]" />
                    <h4 className="lg:text-4xl text-3xl text-white text-semibold py-4 font-bold whitespace-nowrap">Entre em contato!</h4>
                </div>


                <motion.div
                    className="border border-gray-500 rounded-lg "
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4, delay: 0.2 }}>
                    <div className="p-4">
                        <h4 className="text-lg text-white text-semibold  uppercase whitespace-nowrap">Vamos construir algo juntos?</h4>
                        <h5 className="text-sm text-gray-200 text-semibold ">Se você tem algum projeto em mente, sinta-se à vontade para me enviar uma mensagem.</h5>

                        <Button className="rounded-3xl h-8  my-3" variant={'secondary'}>
                            <a className="flex items-center gap-1 " href="mailto:gelsondeveloper@hotmail.com?subject=Contato%20via%20Portfólio">
                                Fale comigo
                                <BsSend size={19} />
                            </a>
                        </Button>
                    </div>

                    <div className="w-full  border-t border-gray-500 flex justify-center items-center p-1 gap-2">
                        {SOCIAL_MEDIA_BAGDE.map((socialMedia, index) => (
                            <motion.div key={index}
                                initial={{ opacity: 0, x: -10, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -10, filter: 'blur(10px)' }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}>
                                <SocialMediaBagde link={socialMedia.link} Icon={socialMedia.icon} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Contact