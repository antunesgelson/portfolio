'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { CiLinkedin } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";

import { BsSend } from "react-icons/bs";
import { FaFigma, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoReact } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { MdAlternateEmail } from "react-icons/md";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandDiscord } from "react-icons/tb";

import BackToTop from "@/components/BackToTop";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const SIZE_ICON = 23
const SKILL_TECH_SIZE = 40
type Props = {
  link: string,
  Icon: IconType

}
const SocialMediaBagde = ({ link, Icon }: Props) => {
  return (
    <a href={link}
      target="_blank"
      className="group flex flex-col items-center mt-1 hover:text-amber-500  "

    >
      <div className="p-1 border border-gray-500 rounded-lg group-hover:border-amber-500 duration-500 ">
        <Icon className="text-gray-200 group-hover:text-amber-500 duration-500 " size={SIZE_ICON} />
      </div>
    </a>
  )
}



const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);


  const skillsTech = [
    { name: 'Typescript', icon: SiTypescript },
    { name: 'Javascript', icon: SiJavascript },
    { name: 'React / Native', icon: IoLogoReact },
    { name: 'Next Js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Figma', icon: FaFigma },
  ]


  const socialMediaBagdeData = [
    { name: 'Github', icon: RiGithubFill, link: '' },
    { name: 'Linkedin', icon: CiLinkedin, link: '' },
    { name: 'Whatsapp', icon: FaWhatsapp, link: '' },
    { name: 'Instagram', icon: FiInstagram, link: '' },
    { name: 'Discord', icon: TbBrandDiscord, link: '' },
    { name: 'E-mail', icon: MdAlternateEmail, link: '' },
  ]



  return (
    <main className="overflow-hidden  ">
      <section className="grid grid-cols-2 items-center  h-[80vh] 2xl:h-[87vh]  relative w-9/12 mx-auto ">
        <div className="-space-y-1 ">
          <h2 className="text-sm">Olá, eu sou o</h2>
          <h1 className="text-3xl ">Gelson Antunes 👋🏾</h1>
          <h3 className="text-4xl font-semibold">Desenvolvedor Front-End</h3>
          <p className="py-4 text-sm">
            Com uma experiência de <strong>três anos</strong>, tenho desenvolvido e aprimorado minhas
            competências na criação de <strong>interfaces bonitas e intuitivas</strong> .
            Atualmente, estou engajado em um projeto significativo para o <strong>Ministério da Saúde</strong>, o portal
            <a className="hover:underline underline-offset-2 cursor-pointer font-bold"> Prática Saúde</a>. Minha especialidade abrange uma variedade de tecnologias,
            incluindo <strong>Next</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, e  <strong>Tailwind</strong>.
          </p>

          <div className=" flex items-center gap-4">
            <Button className="flex items-center gap-2 shadow-amber-600 shadow-lg" variant={'primary'}>
              Baixar CV
              <MdOutlineFileDownload size={SIZE_ICON} />
            </Button>

            <Button className="flex items-center gap-2 shadow-stone-500 shadow-lg cursor-auto">
              Entre em Contato
              <FaLongArrowAltRight />
            </Button>

            <a href="https://github.com/antunesgelson"
              target="_blank"
              className="group flex flex-col items-center mt-1 hover:text-amber-500  duration-300"
            >
              <RiGithubFill size={SIZE_ICON} />
              <span className="text-[0.7rem] group-hover:underline underline-offset-2">Github</span>
            </a>

            <a href="https://www.linkedin.com/in/gelsondeveloper/"
              target="_blank"
              className=" group flex flex-col items-center mt-1 hover:text-amber-500 duration-300 group-hover:"
            >
              <CiLinkedin size={SIZE_ICON} />
              <span className="text-[0.7rem] group-hover:underline underline-offset-2">Linkedin</span>
            </a>
          </div>
        </div>

        <motion.div
          className=" relative flex items-center justify-center  w-10/12  h-full lg:ml-auto  "
          initial={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-full  w-[32vw] h-[32vw]  border-zinc-500 border-2 border-dashed animate-spin absolute  " />
          <Image
            className="grayscale absolute rounded-full shadow-stone-400 shadow-2xl "
            alt="Foto de perfil"
            width={600}
            height={600}
            src="https://github.com/antunesgelson.png"
          />
        </motion.div>
      </section>


      <div className="bg-amber-500 w-full h-14 text-black flex items-center sticky top-0 ">
        <div className="whitespace-nowrap flex animate-scroll">
          {Array.from({ length: 60 }).map((_, index) => (
            <span key={index} className="text-sm font-bold tracking-widest inline-block">/ Web / Mobile / Game / Web / Mobile / Game / Web / Mobile / Game / Web / Mobile / Game  </span>
          ))}
        </div>
      </div>



      <section className=" bg-gray-700  ">
        <div className="w-9/12 mx-auto flex flex-col justify-center h-[100vh] ">
          <h3 className="text-amber-500  ">../competências</h3>

          <h4 className="text-4xl text-white text-semibold py-4">Conhecimentos</h4>

          <div className="grid grid-cols-3 text-white gap-4">
            {skillsTech.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start gap-2 bg-gray-600 p-4 rounded-lg"
                initial={{ opacity: 0, y: 30, }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <skill.icon size={SKILL_TECH_SIZE} className="text-amber-500" />
                <h3 className="text-sm font-bold ">{skill.name}</h3>
                <p className="text-gray-200 text-sm ">*Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate delectus quibusdam dignissimos unde, non labore. Quod, quisquam unde quis placeat ipsum, suscipit tempore modi libero dolore doloremque adipisci accusantium.</p>
              </motion.div>

            ))}
          </div>


        </div>
      </section>

      <section className="bg-white  h-[100vh]">
        <div className="w-9/12 mx-auto py-16 ">
          <h3 className="text-amber-500  ">../destaque</h3>

          <h4 className="text-4xl text-gray-700 text-semibold py-4">Projetos</h4>
        </div>

      </section>

      <section className="bg-amber-500  h-[100vh]">
        <div className="w-9/12 mx-auto py-16 ">
          <h3 className="text-gray-700  ">../destaque</h3>

          <h4 className="text-4xl text-gray-700 text-semibold py-4">Projetos</h4>
        </div>

      </section>


      <section className="bg-gray-700  h-[100vh]">
        <div className="w-9/12 mx-auto py-16 ">
          <h3 className="text-amber-500  ">../destaque</h3>

          <h4 className="text-4xl text-white text-semibold py-4">Projetos</h4>


          <motion.div
            className="container"
            style={{
              scale
            }}
          >
            <motion.div
              className="item"
              style={{
                scaleY: scrollYProgress
              }}
            />
          </motion.div>
        </div>

      </section>


      <section className="bg-gray-700 pb-16">
        <div className="w-9/12 mx-auto">
          <motion.h3
            className="text-amber-500   py-2 "
            initial={{ opacity: 0, x: -20, }}
            whileInView={{ opacity: 1, x: 0, }}
            exit={{ opacity: 0, x: -20, }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            ../contato
          </motion.h3>

          <motion.div
            className="border border-gray-500 rounded-lg "
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="p-4">
              <h4 className="text-lg text-white text-semibold  uppercase">Vamos construir algo juntos ?</h4>
              <h5 className="text-sm text-gray-200 text-semibold ">Se você tem algum projeto em mente, sinta-se à vontade para me enviar uma mensagem.</h5>

              <Button className="rounded-3xl h-8 flex items-center gap-1 my-3" variant={'secondary'}>
                Fale comigo
                <BsSend size={19} />
              </Button>
            </div>

            <div className="w-full  border-t border-gray-500 flex justify-center items-center p-1 gap-2">
              {socialMediaBagdeData.map((socialMedia, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, x: -10, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -10, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <SocialMediaBagde link={socialMedia.link} Icon={socialMedia.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </section>

      <BackToTop />
    </main>
  );
}

export default Home;
