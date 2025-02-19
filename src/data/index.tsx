import Emporio from '@/assets/emporio.png';
import Logo from '@/assets/logo.png';
import LoveYou from '@/assets/loveYou.png';
import Pratica from '@/assets/pratica-saude.png';

import { CiLinkedin } from "react-icons/ci";
import { FaFigma, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoReact } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandDiscord } from "react-icons/tb";


export const SIZE_ICON = 23
export const SKILL_TECH_SIZE = 40

export const SOCIAL_MEDIA_BAGDE = [
    { name: 'Github', icon: RiGithubFill, link: 'https://github.com/antunesgelson' },
    { name: 'Linkedin', icon: CiLinkedin, link: 'https://www.linkedin.com/in/gelsondeveloper/' },
    { name: 'Whatsapp', icon: FaWhatsapp, link: 'https://api.whatsapp.com/send?phone=48991758185&text=Olá! 👋 Vi o seu portfólio e estou interessado em saber mais sobre possíveis parcerias ou oportunidades de trabalho. Podemos conversar? 😊' },
    { name: 'Instagram', icon: FiInstagram, link: 'https://www.instagram.com/antunesgelson_' },
    { name: 'Discord', icon: TbBrandDiscord, link: 'https://discord.gg/aaGjQTQtwb' },
    { name: 'E-mail', icon: MdAlternateEmail, link: 'mailto:gelsondeveloper@hotmail.com?subject=Contato%20via%20Portfólio' },
]

export const PROJECTS = [
    {
        id: 1,
        title: 'Prática Saúde',
        description: 'O projeta visa apoiar profissionais da saúde, gestores do SUS, pesquisadores e estudantes. Ele oferece um repositório diversificado que inclui documentos variados, estudos de pesquisa e cursos online. A plataforma visa facilitar o acesso a informações relevantes e materiais educativos, contribuindo para a melhoria contínua dos serviços de saúde',
        technologies: ['Typescript', 'Next Js', 'Tailwind CSS'],
        github: 'https://github.com/antunesgelson/pratica-saude-front-end',
        link: 'https://praticasaude.ufsc.br/',
        image: Pratica,
        status: null
    },
    {
        id: 2,
        title: 'LoveYou',
        description: 'A LoveYou é uma plataforma inovadora que permite criar lembretes virtuais interativos para celebrar relacionamentos. Com recursos personalizáveis, os usuários podem adicionar músicas especiais, mensagens únicas e momentos memoráveis, criando uma experiência digital afetiva e única. Ideal para casais que desejam guardar e compartilhar recordações de forma criativa e emocionante.',
        technologies: ['Typescript', 'Next Js', 'Tailwind CSS'],
        github: 'https://github.com/antunesgelson/loveyou',
        link: 'https://loveyou.vc/',
        image: LoveYou,
        status: null
    },
    // {
    //     id: 2,
    //     title: 'Safe',
    //     description: 'O projeto Safe foi especialmente concebido para atender as necessidades dos profissionais de atividade física que colaboram com o Sistema Único de Saúde (SUS). Em uma era em que a tecnologia desempenha um papel crucial em diversos setores, incluindo a saúde e o bem-estar, o Safe se destaca como uma ferramenta valiosa para professores de educação física e outros especialistas na área de movimento e exercício.',
    //     technologies: ['Javascript', 'Tailwind CSS'],
    //     github: 'https://github.com/antunesgelson/',
    //     link: 'https://praticasaude.ufsc.br/',
    //     image: Safe,
    //     status: null
    // },
    {
        id: 3,
        title: 'Empório Urubici',
        description: "O Empório Urubici foi desenvolvido para oferecer uma solução eficiente e moderna de delivery, especializada em café da manhã. O projeto visa proporcionar uma experiência rápida e agradável tanto para os clientes quanto para a equipe operacional, utilizando tecnologia de ponta para otimizar todo o processo de pedidos e entregas.",
        technologies: ['Typescript', 'Next Js', 'Next-Auth', 'Tailwind CSS'],
        github: 'https://github.com/antunesgelson/eu-delivery',
        link: 'https://eudelivery.seu.dev.br/',
        image: Emporio,
        status: 'em desenvolvimento.'
    },
    // {
    //     id: 4,
    //     title: 'Corte Ai',
    //     description: 'O projeto Safe foi especialmente concebido para atender as necessidades dos profissionais de atividade física que colaboram com o Sistema Único de Saúde (SUS). Em uma era em que a tecnologia desempenha um papel crucial em diversos setores, incluindo a saúde e o bem-estar, o Safe se destaca como uma ferramenta valiosa para professores de educação física e outros especialistas na área de movimento e exercício.',
    //     technologies: ['Typescript', 'Next Js', 'Next-Auth', 'Tailwind CSS'],
    //     github: 'https://github.com/antunesgelson/corte-ai',
    //     link: 'https://corteai.com/',
    //     image: Pratica
    // },
]

export const TIME_LINE_EXPERIENCE = [
    {
        company: 'Prática Saúde',
        logo: Logo,
        role: 'Desenvolvedor Front-end',
        date: 'Jul 2024 - Abr 2025',
        content: "O projeta visa apoiar profissionais da saúde, gestores do SUS, pesquisadores e estudantes. Ele oferece um repositório diversificado que inclui documentos variados, estudos de pesquisa e cursos online. A plataforma visa facilitar o acesso a informações relevantes e materiais educativos, contribuindo para a melhoria contínua dos serviços de saúde",
        technology: ['Typescript', 'Next Js', 'Tailwind CSS']
    },

];

export const SKILLS_TECH = [
    { name: 'Typescript', icon: SiTypescript, description: 'Um superconjunto do JavaScript que oferece tipagem estática para garantir maior segurança e escalabilidade em projetos de desenvolvimento. Ideal para equipes que buscam eficiência e controle de qualidade no código.' },
    { name: 'Javascript', icon: SiJavascript, description: ' A espinha dorsal do desenvolvimento web, o JavaScript é uma linguagem versátil que permite páginas web interativas. É uma habilidade essencial para qualquer desenvolvedor front-end, permitindo a criação de conteúdo dinâmico e o manejo da interação do usuário.' },
    { name: 'React / Native', icon: IoLogoReact, description: 'Uma biblioteca para criar interfaces de usuário e aplicativos móveis nativos com uma base de código unificada. O React simplifica a reutilização de componentes, enquanto o React Native leva o poder do React para o desenvolvimento móvel.' },
    { name: 'Next Js', icon: SiNextdotjs, description: 'Um framework React de código aberto que possibilita funcionalidades como renderização no lado do servidor e geração de sites estáticos, tornando-o uma ótima escolha para melhorar o desempenho e criar aplicações web amigáveis para SEO.' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Um framework CSS que adota uma abordagem de primeiro utilitário para o design de interfaces, permitindo que você construa designs complexos com uma série de utilitários pré-definidos aplicáveis diretamente no HTML.' },
    { name: 'Figma', icon: FaFigma, description: ' Uma ferramenta de design baseada na web que é poderosa e fácil de usar, o Figma permite o design colaborativo de interfaces, com recursos como colaboração em tempo real, redes vetoriais e auto layout tornando-o um favorito entre os designers de UI/UX.' },
]


