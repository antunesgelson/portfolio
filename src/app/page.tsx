'use client'

import { PROJECTS, SIZE_ICON, SKILLS_TECH, SKILL_TECH_SIZE, TIME_LINE_EXPERIENCE } from '@/data';
import { AnimatePresence, motion, useScroll } from "framer-motion";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { CiLinkedin } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiArrowSquareOutLight } from "react-icons/pi";
import { RiGithubFill } from "react-icons/ri";


const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll()
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const paralaxRef = useRef<HTMLElement>(null);
  const [isParalaxVisible, setIsParalaxVisible] = useState(false);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/download/cv.pdf'; // Caminho atualizado
    link.download = 'cv.pdf'; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (selectedId) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedId]);

  useEffect(() => {                                                                                                                                                 // 50% of the section needs to be visible
    const observer = new IntersectionObserver(([entry]) => { setIsParalaxVisible(entry.isIntersecting); }, { threshold: 0.1 });
    if (paralaxRef.current) observer.observe(paralaxRef.current);

    return () => {
      if (paralaxRef.current) observer.unobserve(paralaxRef.current);
    };
  }, [scrollYProgress]);

  useEffect(() => {
    console.log('caiu aqui')
  }, []);

  return (
    <main className="overflow-hidden  ">
      {/* Descrition */}
      <section className="grid lg:grid-cols-2  items-center  lg:h-[82vh] 2xl:h-[88vh]  relative p-6 lg:p-0 lg:px-32 2xl:px-80   mx-auto bg-white ">
        <div className="-space-y-1 order-2 lg:order-none ">
          <motion.h2
            className="text-lg"
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1 }} >
            Olá, eu sou o
          </motion.h2>

          <motion.h3
            className="text-3xl "
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Gelson Antunes 👋🏾
          </motion.h3>

          <motion.h1
            className="text-4xl font-semibold"
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            Desenvolvedor Front-End
          </motion.h1>

          <motion.p
            className="py-4 text-sm text-gray-300"
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}>
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
              transition={{ duration: 0.6, delay: 0.1 }}>
              <Button onClick={downloadCV} className=" items-center gap-2 shadow-amber-600 shadow-lg hidden lg:flex" variant={'primary'}>
                Baixar CV
                <MdOutlineFileDownload size={SIZE_ICON} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <Button className="flex items-center gap-2 shadow-stone-500 shadow-lg cursor-auto">
                Entre em Contato
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, repeatType: "loop", duration: 1 }}>
                  <FaLongArrowAltRight />
                </motion.div>
              </Button>
            </motion.div>

            <motion.a
              target="_blank"
              href="https://github.com/antunesgelson"
              className="group flex flex-col items-center ml-3 lg:ml-0 mt-1 hover:text-amber-500  duration-300"
              initial={{ opacity: 0, x: -20, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}>
              <RiGithubFill size={SIZE_ICON} />
              <span className="text-[0.7rem] group-hover:underline underline-offset-2">Github</span>
            </motion.a>

            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/gelsondeveloper/"
              className=" group flex flex-col items-center ml-3  lg:ml-0 mt-1 hover:text-amber-500 duration-300 group-hover:"
              initial={{ opacity: 0, x: -20, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}>
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
          transition={{ duration: 0.7 }}>
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
        transition={{ duration: 0.6 }}>
        <div className="whitespace-nowrap flex animate-scroll">
          {Array.from({ length: 60 }).map((_, index) => (
            <span key={index} className="text-sm font-bold tracking-widest inline-block">/ Web / Mobile / Game / Web / Mobile / Game / Web / Mobile / Game / Web / Mobile / Game  </span>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <section id="skills" className=" bg-gray-700 py-8  ">
        <div className="p-6 lg:p-0 2xl:w-8/12  lg:w-10/12  mx-auto flex flex-col justify-center lg:min-h-[100vh] ">
          <motion.h3
            className="text-amber-500 text-start  "
            initial={{ opacity: 0, x: -20, }}
            whileInView={{ opacity: 1, x: 0, }}
            exit={{ opacity: 0, x: -20, }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            ../competências
          </motion.h3>

          <div className="flex items-center justify-between lg:gap-10 lg:pb-8 gap-3  ">
            <h4 className="lg:text-4xl text-3xl text-white text-semibold py-4 font-bold">Conhecimentos</h4>
            <div className="w-full  bg-gray-400 h-[1px]" />
          </div>

          <div className="grid lg:grid-cols-3 text-white gap-4 ">
            {SKILLS_TECH.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start gap-2 bg-gray-600 p-4 rounded-tl-xl rounded-br-xl border-b-4 border-gray-400"
                initial={{ opacity: 0, y: 30, }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}>
                <skill.icon size={SKILL_TECH_SIZE} className="text-amber-500" />
                <h3 className="text-sm font-bold ">{skill.name}</h3>
                <p className="text-gray-200 text-sm ">{skill.description}</p>
              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-700 py-8">
        <div className="p-6 lg:p-0 2xl:w-8/12  lg:w-10/12  mx-auto ">
          <motion.h3
            className="text-amber-500  text-end"
            initial={{ opacity: 0, x: 20, }}
            whileInView={{ opacity: 1, x: 0, }}
            exit={{ opacity: 0, x: 20, }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            ../destaque
          </motion.h3>

          <div className="flex items-center justify-between lg:gap-10 gap-3 lg:pb-8 ">
            <div className="w-full  bg-gray-400 h-[1px]" />
            <h4 className="lg:text-4xl text-3xl text-white text-semibold py-4 font-bold">Projetos</h4>
          </div>

          {PROJECTS.map((project, index) => (
            <div key={project.id} className="h-full  grid lg:grid-cols-2 place-items-center   ">
              <div className={`h-full relative flex flex-col justify-center  ${index % 2 === 0 ? 'order-1 ' : ' order-2'}`}>
                <motion.h3
                  className={`lg:text-4xl text-2xl lg:py-4 py-1 text-white ${index % 2 === 0 ? 'text-start ' : ' text-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                  whileInView={{ opacity: 1, x: 0, }}
                  exit={{ opacity: 0, x: index % 2 === 0 ? -10 : 10, }}
                  transition={{ duration: 0.4, delay: 0.1 }}>
                  {project.title}
                </motion.h3>
                {project.status &&
                  <button className={`text-white bg-red-600 rounded-full px-2 my-1 text-xs absolute lg:top-1/3 -top-3 ${index % 2 === 0 ? 'left-0 ' : ' right-0'} `}>
                    {project.status}
                  </button>
                }


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
                    <Button asChild variant={'ghost'} className="hover:text-amber-500 hover:underline underline-offset-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Ver código
                        <RiGithubFill size={SIZE_ICON} />
                      </a>
                    </Button>

                    <Button asChild className="flex items-center gap-2 hover:bg-amber-500 hover:text-black hover:border-amber-500 hover:underline underline-offset-4" variant={'outline'}>
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
          ))}

        </div>
      </section>


      {/* Projects Slide */}
      {/* <section
        ref={paralaxRef}
        className={`transition-all duration-700 `}>

        <div className="p-6 lg:p-0 2xl:w-8/12  lg:w-10/12  mx-auto ">
          <motion.h3
            className="text-amber-500  text-end"
            initial={{ opacity: 0, x: 20, }}
            whileInView={{ opacity: 1, x: 0, }}
            exit={{ opacity: 0, x: 20, }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            ../destaque
          </motion.h3>

          <div className="flex items-center justify-between lg:gap-10 gap-3 lg:pb-8 ">
            <div className="w-full  bg-gray-400 h-[1px]" />
            <h4 className="lg:text-4xl text-3xl text-white text-semibold py-4 font-bold">Projetos</h4>
          </div>

          <Paralax />

        </div>
      </section> */}

      {/* Experience */}
      <section id="experience" className="bg-amber-500 py-8">
        <div className="p-6 lg:p-0 2xl:w-8/12  lg:w-10/12  mx-auto flex flex-col  lg:min-h-[100vh] ">
          <motion.h3
            className="text-gray-500 font-semibold text-start"
            initial={{ opacity: 0, x: -20, }}
            whileInView={{ opacity: 1, x: 0, }}
            exit={{ opacity: 0, x: -20, }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            ../conhecimento
          </motion.h3>

          <div className="flex items-center justify-start pb-8 relative  ">
            <h4 className="lg:text-4xl text-3xl text-white  py-4 font-bold">Experiência</h4>
            <div className="absolute top-[60%] right-1/2  left-0  bg-gray-400 h-[1px]" />
          </div>

          <div className="flex flex-col items-center w-full  ">
            {TIME_LINE_EXPERIENCE.map((item, index) => (
              <div className=" relative" key={index}>
                <div className="absolute w-[1px] h-full border-r-[1px] border-gray-700 right-1/2 lg:-mt-[2.60rem] -mt-[2.50rem] z-0" />
                <div className="grid grid-cols-2 ">

                  <motion.div
                    className={`bg-gray-700   p-4 border-b-4 shadow-2xl shadow-black/60 rounded-b-xl lg:m-10 mt-24 z-10   lg:w-[300px] ${index % 2 === 0 ? 'order-1 lg:rounded-tl-xl rounded-t-xl lg:rounded-t-none  border-l-4 -mr-44' : ' rounded-tr-xl order-2 rounded-t-xl lg:rounded-t-none   border-r-4 -ml-44'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, }}
                    whileInView={{ opacity: 1, x: 0, }}
                    exit={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, }}
                    transition={{ duration: 0.6, delay: index * 0.4 }}>
                    <h3 className="text-white font-semibold">{item.role}</h3>
                    <h4 className="text-sm text-gray-300">{item.company}</h4>
                    <p className="text-gray-200 text-sm py-2">{item.content}</p>

                    <div className="flex items-center gap-1 ">
                      {item.technology.map((tech, i) => (
                        <motion.div
                          key={tech + i}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.2 }}>
                          <Badge variant={'tech'} className="line-clamp-1 text-center">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.h3 className={`text-gray-700 lg:text-sm text-xs font-semibold mt-10 lg:m-10  ${index % 2 === 0 ? 'order-2  ml-8 lg:mr-auto whitespace-nowrap ' : 'order-1   lg:ml-auto'}`}
                    initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30, }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30, }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}>
                    {item.date}
                  </motion.h3>

                  <motion.div
                    className="w-12 h-12 rounded-full border-2  bg-white text-sm flex items-center justify-center absolute   top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}>
                    <Image
                      className="  rounded-full  shadow-2xl  w-full h-full "
                      alt="Logotipo"
                      width={600}
                      height={600}
                      src={item.logo}
                    />
                  </motion.div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact */}
      <Contact />

      {!selectedId && <BackToTop />} {/* Apresenta  Botão de voltar ao topo somente se não estiver com iframe em tela */}
    </main >
  );
}

export default Home;


