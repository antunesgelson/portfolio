'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";


import Safe from '@/assets/safe.png';

import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";

import { BsSend } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaFigma, FaLongArrowAltRight, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoCloseCircle, IoLogoReact } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { LuArrowUpRight } from "react-icons/lu";
import { MdAlternateEmail, MdOutlineFileDownload } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandDiscord } from "react-icons/tb";

import {
  AnimatePresence,
  MotionValue,
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";

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
  const [selectedId, setSelectedId] = useState<string | null>('')

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


  const timelineItems = [
    {
      role: 'Desenvolvedor Front-end',
      company: 'Seu Dev',
      date: 'Jan 2021 - Dez 2024',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem magnam quod tempora incidunt beatae placeat quia provident necessitatibus dolore expedita eos rerum iste dolorum voluptates quisquam molestiae veniam, id optio?'
    },
    {
      role: 'Desenvolvedor Front-end',
      company: 'Seu Dev',
      date: 'Jan 2021 - Dez 2024',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem magnam quod tempora incidunt beatae placeat quia provident necessitatibus dolore expedita eos rerum iste dolorum voluptates quisquam molestiae veniam, id optio?'
    },
    {
      role: 'Desenvolvedor Front-end',
      company: 'Seu Dev',
      date: 'Jan 2021 - Dez 2024',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem magnam quod tempora incidunt beatae placeat quia provident necessitatibus dolore expedita eos rerum iste dolorum voluptates quisquam molestiae veniam, id optio?'
    },

  ];

  const projects = [
    {
      id: '1',
      title: 'Safe',
      description: 'O projeto Safe foi especialmente concebido para atender as necessidades dos profissionais de atividade física que colaboram com o Sistema Único de Saúde (SUS). Em uma era em que a tecnologia desempenha um papel crucial em diversos setores, incluindo a saúde e o bem-estar, o Safe se destaca como uma ferramenta valiosa para professores de educação física e outros especialistas na área de movimento e exercício.',
      technologies: ['Javascript', 'Tailwind CSS'],
      github: '',
      link: '',
      image: Safe
    },
    {
      id: '2',
      title: 'Safe',
      description: 'O projeto Safe foi especialmente concebido para atender as necessidades dos profissionais de atividade física que colaboram com o Sistema Único de Saúde (SUS). Em uma era em que a tecnologia desempenha um papel crucial em diversos setores, incluindo a saúde e o bem-estar, o Safe se destaca como uma ferramenta valiosa para professores de educação física e outros especialistas na área de movimento e exercício.',
      technologies: ['Javascript', 'Tailwind CSS'],
      github: '',
      link: '',
      image: Safe
    },
    {
      id: '3',
      title: 'Safe',
      description: 'O projeto Safe foi especialmente concebido para atender as necessidades dos profissionais de atividade física que colaboram com o Sistema Único de Saúde (SUS). Em uma era em que a tecnologia desempenha um papel crucial em diversos setores, incluindo a saúde e o bem-estar, o Safe se destaca como uma ferramenta valiosa para professores de educação física e outros especialistas na área de movimento e exercício.',
      technologies: ['Javascript', 'Tailwind CSS'],
      github: '',
      link: '',
      image: Safe
    },
  ]


  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);


  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedId]);


  return (
    <main className="overflow-hidden  ">

      {/* Descrition */}
      <section className="grid lg:grid-cols-2  items-center  lg:h-[82vh] 2xl:h-[88vh]  relative lg:w-9/12 mx-auto p-6 lg:p-0 ">
        <div className="-space-y-1 order-2 lg:order-none ">
          <motion.h2
            className="text-sm"
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Olá, eu sou o
          </motion.h2>

          <motion.h3
            className="text-3xl "
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gelson Antunes 👋🏾
          </motion.h3>

          <motion.h1
            className="text-4xl font-semibold"
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Desenvolvedor Front-End
          </motion.h1>

          <motion.p
            className="py-4 text-sm text-gray-300"
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
          >
            Com uma experiência de <strong>três anos</strong>, tenho desenvolvido e aprimorado minhas
            competências na criação de <strong>interfaces bonitas e intuitivas</strong> .
            Atualmente, estou engajado em um projeto significativo para o <strong>Ministério da Saúde</strong>, o portal
            <a className="hover:underline underline-offset-2 cursor-pointer font-bold"> Prática Saúde</a>. Minha especialidade abrange uma variedade de tecnologias,
            incluindo <strong>Next</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, e  <strong>Tailwind</strong>.
          </motion.p>



          {/* CTA */}
          <div className=" flex items-center lg:pb-6 lg:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -10, }}
              animate={{ opacity: 1, x: 0, }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Button className=" items-center gap-2 shadow-amber-600 shadow-lg hidden lg:flex" variant={'primary'}>
                Baixar CV
                <MdOutlineFileDownload size={SIZE_ICON} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10, }}
              animate={{ opacity: 1, x: 0, }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button className="flex items-center gap-2 shadow-stone-500 shadow-lg cursor-auto">
                Entre em Contato
                <FaLongArrowAltRight />
              </Button>
            </motion.div>

            <motion.a
              target="_blank"
              href="https://github.com/antunesgelson"
              className="group flex flex-col items-center ml-3 lg:ml-0 mt-1 hover:text-amber-500  duration-300"
              initial={{ opacity: 0, x: -20, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <RiGithubFill size={SIZE_ICON} />
              <span className="text-[0.7rem] group-hover:underline underline-offset-2">Github</span>
            </motion.a>

            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/gelsondeveloper/"
              className=" group flex flex-col items-center ml-3  lg:ml-0 mt-1 hover:text-amber-500 duration-300 group-hover:"
              initial={{ opacity: 0, x: -20, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <CiLinkedin size={SIZE_ICON} />
              <span className="text-[0.7rem] group-hover:underline underline-offset-2">Linkedin</span>
            </motion.a>
          </div>
        </div>


        {/* Imagem de Perfil */}
        <motion.div
          className="flex items-center w-10/12 mx-auto  h-full order-1 lg:order-none   "
          initial={{ opacity: 0, x: 70, filter: 'blur(20px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
        >
          <Image
            className="grayscale  rounded-full shadow-stone-400 shadow-2xl "
            alt="Foto de perfil"
            width={600}
            height={600}
            src="https://github.com/antunesgelson.png"
          />
        </motion.div>

      </section>

      {/* Banner */}
      <motion.div
        className="bg-amber-500 w-full h-14 text-black flex items-center sticky top-0  -z-10 "
        initial={{ y: 100, }}
        animate={{ y: 0, }}
        transition={{ duration: 0.6 }}
      >
        <div className="whitespace-nowrap flex animate-scroll">
          {Array.from({ length: 60 }).map((_, index) => (
            <span key={index} className="text-sm font-bold tracking-widest inline-block">/ Web / Mobile / Game / Web / Mobile / Game / Web / Mobile / Game / Web / Mobile / Game  </span>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <section className=" bg-gray-700  ">
        <div className="p-6 lg:w-9/12 mx-auto flex flex-col justify-center lg:h-[100vh] ">
          <h3 className="text-amber-500  ">../competências</h3>

          <h4 className="text-4xl text-white text-semibold py-4">Conhecimentos</h4>

          <div className="grid lg:grid-cols-3 text-white gap-4">
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

      {/* Timeline */}
      <section className="bg-amber-500">
        <div className="px-6 pb-6 lg:w-9/12 mx-auto lg:min-h-[100vh] ">

          <div className="flex flex-col items-center w-full">
            <div className="w-[3px] bg-gray-500 h-full absolute" />


            {timelineItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-2  relative">

                  <motion.div
                    className={`bg-gray-600  p-4 border-b-4 shadow-2xl shadow-black/60 rounded-b-xl lg:m-10 mt-24   lg:w-[300px] ${index % 2 === 0 ? 'order-1 lg:rounded-tl-xl rounded-t-xl lg:rounded-t-none  border-l-4 -mr-44' : ' rounded-tr-xl order-2 rounded-t-xl lg:rounded-t-none   border-r-4 -ml-44'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <h3 className="text-white font-semibold">{item.role}</h3>
                    <h4 className="text-sm text-gray-200">{item.company}</h4>
                    <p className="text-gray-100 text-sm py-2">{item.content}</p>
                  </motion.div>

                  <motion.h3 className={`text-gray-700 text-sm font-semibold mt-10 lg:m-10  ${index % 2 === 0 ? 'order-2  ml-8 lg:mr-auto whitespace-nowrap ' : 'order-1   lg:ml-auto'}`}
                    initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30, }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30, }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {item.date}
                  </motion.h3>

                  <motion.div
                    className="w-10 h-10 rounded-full border-gray-500 border-4 bg-white text-sm flex items-center justify-center absolute   top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}

                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    Icon
                  </motion.div>

                </div>

              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-gray-700  ">
        <div className="p-6 lg:w-9/12 mx-auto lg:py-16 ">
          <h3 className="text-amber-500  ">../destaque</h3>
          <h4 className="text-4xl text-white text-semibold py-4 mb-14">Projetos</h4>

          {projects.map((project, index) => (
            <div className="h-full  grid lg:grid-cols-2   mb-60">
              <div className={`h-full  ${index % 2 === 0 ? 'order-1 ' : ' order-2'}`}>
                <motion.h3
                  className={`text-4xl py-4 text-white ${index % 2 === 0 ? 'text-start ' : ' text-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                  whileInView={{ opacity: 1, x: 0, }}
                  exit={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.title}
                </motion.h3>

                <div>
                  <motion.h4
                    className={`text-gray-200 ${index % 2 === 0 ? 'text-start ' : ' text-end'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                    whileInView={{ opacity: 1, x: 0, }}
                    exit={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.h4>

                  <motion.div
                    className={`flex items-center text-amber-400 text-sm gap-2 py-2 ${index % 2 === 0 ? 'justify-start ' : ' justify-end'}`}
                    initial={{ opacity: 0, x: -10, }}
                    whileInView={{ opacity: 1, x: 0, }}
                    exit={{ opacity: 0, x: -10, }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="text-white">Tecnologias:</span>

                    {project.technologies.map((tech, index) => (
                      <motion.span
                        initial={{ opacity: 0, x: -10, }}
                        whileInView={{ opacity: 1, x: 0, }}
                        exit={{ opacity: 0, x: -10, }}
                        transition={{ duration: 0.6, delay: 0.3 * index }}
                      >
                        {tech},
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className={`flex items-center gap-2 py-4 ${index % 2 === 0 ? 'justify-start ' : ' justify-end'}`}
                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, }}
                  >
                    <Button variant={'ghost'}>
                      Ver código
                      <RiGithubFill size={SIZE_ICON} />
                    </Button>

                    <Button className="flex items-center gap-2" variant={'outline'}>
                      Visitar site
                      <LuArrowUpRight size={SIZE_ICON} />
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
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Image
                  alt="Foto do projeto"
                  width={600}
                  height={600}
                  src={project.image}
                />

                {/* <motion.h2 style={{ y }}>{`#00${project.id}`}</motion.h2> */}
              </motion.div>
            </div>
          ))}


          {/* Iframe do projeto selecionado */}
          <AnimatePresence >
            {selectedId && (
              <>
                <div onClick={() => setSelectedId(null)} className="fixed top-0 bottom-0 left-0 right-0 bg-black/50  z-[50] cursor-pointer" />
                <motion.div
                  className="fixed top-10 bottom-10 left-5 right-5 lg:top-10 lg:bottom-10 lg:left-10 lg:right-10 z-[100] "
                  initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6 }}
                >
                  <iframe className="h-full w-full rounded-lg" src="https://seu.dev.br/" />


                  <motion.div
                    className="absolute -top-10 -right-10 hover:scale-110 transition-transform duration-300"
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button
                      className=""
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
      </section>

      {/* Contato */}
      <section className="bg-gray-700 pb-16">
        <div className="w-11/12 lg:w-9/12 mx-auto">
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

      {!selectedId && <BackToTop />} {/* Apresenta  Botão de voltar ao topo somente se não estiver com iframe em tela */}

    </main >
  );
}

export default Home;


