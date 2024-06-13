'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

import { CiLinkedin } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";

import { IoLogoReact } from "react-icons/io5";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const SIZE_ICON = 23
const SKILL_TECH_SIZE = 40
export default function Home() {

  const skillsTech = [
    { name: 'Typescript', icon: SiTypescript },
    { name: 'Javascript', icon: SiJavascript },
    { name: 'React / Native', icon: IoLogoReact },
    { name: 'Next Js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ]


  return (
    <main className="overflow-hidden  ">
      <section className="grid grid-cols-2 items-center  h-[80vh] 2xl:h-[87vh]  relative w-9/12 mx-auto ">
        <div className="-space-y-1 ">
          <h2 className="text-sm">Olá, eu sou o</h2>
          <h1 className="text-3xl ">Gelson Antunes 👋🏾</h1>
          <h3 className="text-4xl font-semibold">Desenvolvedor Front-End</h3>
          <p className="py-4 text-sm">Um profissional extremamente habilidoso em desenvolvimento de sites, aplicativos web, com foco na experiência do usuário e também na responsividade de meus projetos, sou acostumado a trabalhar com prazos curto.</p>

          <div className=" flex items-center gap-4">
            <Button className="flex items-center gap-2 shadow-amber-600 shadow-lg" variant={'primary'}>
              Baixar CV
              <MdOutlineFileDownload size={SIZE_ICON} />
            </Button>

            <Button className="flex items-center gap-2 shadow-stone-500 shadow-lg">
              Entre em Contato
              <FaLongArrowAltRight />
            </Button>

            <a href="https://github.com/antunesgelson"
              target="_blank"
              className="flex flex-col items-center mt-1 hover:text-amber-500  duration-300"
            >
              <RiGithubFill size={SIZE_ICON} />
              <span className="text-[0.7rem] hover:underline underline-offset-2">Github</span>
            </a>

            <a href="https://www.linkedin.com/in/gelsondeveloper/"
              target="_blank"
              className="flex flex-col items-center mt-1 hover:text-amber-500 duration-300 group-hover:"
            >
              <CiLinkedin size={SIZE_ICON} />
              <span className="text-[0.7rem] hover:underline underline-offset-2">Linkedin</span>
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



      <section className=" bg-gray-700  h-[80vh] 2xl:h-[87vh] ">
        <div className="w-9/12 mx-auto py-8 ">
          <h3 className="text-amber-500  ">../competências</h3>

          <h4 className="text-4xl text-white text-semibold py-4">Conhecimentos</h4>

          <div className="grid grid-cols-3 text-white gap-4">
            {skillsTech.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start gap-2 bg-gray-600 p-4 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <skill.icon size={SKILL_TECH_SIZE} className="text-amber-500" />
                <h3 className="text-sm font-bold ">{skill.name}</h3>
                <p className="text-gray-200 text-sm ">*Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate delectus quibusdam dignissimos unde, non labore. Quod, quisquam unde quis placeat ipsum, suscipit tempore modi libero dolore doloremque adipisci accusantium.</p>
              </motion.div>

            ))}
          </div>


        </div>
      </section>
    </main>
  );
}
