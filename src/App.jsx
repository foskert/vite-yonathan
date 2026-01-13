import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Globe,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Send,
  Sun,
  Moon,
  Smartphone,
  XCircle,
  FileDown,
  Images,
  PlayCircle,
} from 'lucide-react';
import bannerImage from './assets/image/banner.png'; // 1. Importa tu imagen
import bannern8n from './assets/image/n8n.jpg'; 
import plz01Image from './assets/image/certificados/plz01.jpg';
import plz02Image from './assets/image/certificados/plz02.jpg';
import plz03Image from './assets/image/certificados/plz03.jpg';
import plz04Image from './assets/image/certificados/plz04.jpg';
import plz05Image from './assets/image/certificados/plz05.jpg';
import plz06Image from './assets/image/certificados/plz06.jpg';
import plz07Image from './assets/image/certificados/plz07.jpg';
import plz08Image from './assets/image/certificados/plz08.jpg';
import plz09Image from './assets/image/certificados/plz09.jpg';
import plz10Image from './assets/image/certificados/plz10.jpg';
import plz11Image from './assets/image/certificados/plz11.jpg';
import plz12Image from './assets/image/certificados/plz12.jpg';
import plz13Image from './assets/image/certificados/plz13.jpg';
import plz14Image from './assets/image/certificados/plz14.jpg';
import plz15Image from './assets/image/certificados/plz15.jpg';
import plz16Image from './assets/image/certificados/plz16.jpg';
import plz17Image from './assets/image/certificados/plz17.jpg';
import plz18Image from './assets/image/certificados/plz18.jpg';
import plz19Image from './assets/image/certificados/plz19.jpg';
import plz20Image from './assets/image/certificados/plz20.jpg';
import plz21Image from './assets/image/certificados/plz21.jpg';
import plz22Image from './assets/image/certificados/plz22.jpg';
import plz23Image from './assets/image/certificados/plz23.jpg';
import plz24Image from './assets/image/certificados/plz24.jpg';
import plz25Image from './assets/image/certificados/plz25.jpg';
import plz26Image from './assets/image/certificados/plz26.jpg';


import bukeImage from './assets/image/proyect/buke.png';
import rubickImage from './assets/image/proyect/rubick.png';
import yeguadaImage from './assets/image/proyect/yeguada.png';
import clubImage from './assets/image/proyect/club.png';
import rctImagen from './assets/image/proyect/rct.png';
import campaignImagen from './assets/image/proyect/campaign.png';

import campaignImagen1 from './assets/image/proyect/campaign/1.jpeg';
import campaignImagen2 from './assets/image/proyect/campaign/2.jpeg';
import campaignImagen3 from './assets/image/proyect/campaign/3.jpeg';
import campaignImagen4 from './assets/image/proyect/campaign/4.jpeg';
import campaignImagen5 from './assets/image/proyect/campaign/5.jpeg';
import campaignImagen6 from './assets/image/proyect/campaign/6.jpeg';
import campaignImagen7 from './assets/image/proyect/campaign/7.jpeg';
import campaignImagen8 from './assets/image/proyect/campaign/8.jpeg';



import makeImagen from './assets/image/proyect/make.jpg';

import makeScamImagen1 from './assets/image/proyect/makescam/1.jpg';
import makeScamImagen2 from './assets/image/proyect/makescam/2.jpg';
import makeScamImagen3 from './assets/image/proyect/makescam/3.jpg';
import makeScamImagen4 from './assets/image/proyect/makescam/4.jpg';
import makeScamImagen5 from './assets/image/proyect/makescam/5.jpg';
import makeScamImagen6 from './assets/image/proyect/makescam/6.jpg';
import makeScamImagen7 from './assets/image/proyect/makescam/7.jpg';
import makeScamImagen8 from './assets/image/proyect/makescam/8.jpg';
import makeScamImagen9 from './assets/image/proyect/makescam/9.jpg';
import makeScamImagen10 from './assets/image/proyect/makescam/10.jpg';
import makeScamImagen11 from './assets/image/proyect/makescam/11.jpg';
import makeScamImagen12 from './assets/image/proyect/makescam/12.jpg';
import makeScamImagen13 from './assets/image/proyect/makescam/13.jpg';

import makeProductImagen1 from './assets/image/proyect/makesproduct/1.jpg';
import makeProductImagen2 from './assets/image/proyect/makesproduct/2.jpg';
import makeProductImagen3 from './assets/image/proyect/makesproduct/3.jpg';
import makeProductImagen4 from './assets/image/proyect/makesproduct/4.jpg';
import makeProductImagen5 from './assets/image/proyect/makesproduct/5.jpg';
import makeProductImagen6 from './assets/image/proyect/makesproduct/6.jpg';
import makeProductImagen7 from './assets/image/proyect/makesproduct/7.jpg';
import makeProductImagen8 from './assets/image/proyect/makesproduct/8.jpg';
import makeProductImagen9 from './assets/image/proyect/makesproduct/9.jpg';
import makeProductImagen10 from './assets/image/proyect/makesproduct/10.jpg';
import makeProductImagen11 from './assets/image/proyect/makesproduct/11.jpg';
import makeProductImagen12 from './assets/image/proyect/makesproduct/12.jpg';
import makeProductImagen13 from './assets/image/proyect/makesproduct/13.jpg';

import ewexcarImagen from './assets/image/proyect/ewexcar.jpg';

import ewexAppImagen1 from './assets/image/proyect/ewexcarapp/1.jpg';
import ewexAppImagen3 from './assets/image/proyect/ewexcarapp/3.jpg';
import ewexAppImagen4 from './assets/image/proyect/ewexcarapp/4.jpg';
import ewexAppImagen5 from './assets/image/proyect/ewexcarapp/5.jpg';
import ewexAppImagen6 from './assets/image/proyect/ewexcarapp/6.jpg';
import ewexAppImagen7 from './assets/image/proyect/ewexcarapp/7.jpg';
import ewexAppImagen8 from './assets/image/proyect/ewexcarapp/8.jpg';
import ewexAppImagen9 from './assets/image/proyect/ewexcarapp/9.jpg';
import ewexAppImagen10 from './assets/image/proyect/ewexcarapp/10.jpg';
import ewexAppImagen11 from './assets/image/proyect/ewexcarapp/11.jpg';
import ewexAppImagen12 from './assets/image/proyect/ewexcarapp/12.jpg';

import segundoImagen1 from './assets/image/proyect/segundos/1.png';
import segundoImagen2 from './assets/image/proyect/segundos/3.png';
import segundoImagen3 from './assets/image/proyect/segundos/4.png';
import segundoImagen4 from './assets/image/proyect/segundos/5.png';
import segundoImagen5 from './assets/image/proyect/segundos/6.png';
import segundoImagen6 from './assets/image/proyect/segundos/7.png';
import segundoImagen7 from './assets/image/proyect/segundos/8.png';
import segundoImagen8 from './assets/image/proyect/segundos/9.png';
import segundoImagen9 from './assets/image/proyect/segundos/10.png';
import segundoImagen10 from './assets/image/proyect/segundos/10.png';

import tuidImagen from './assets/image/proyect/tuid.jpg';
import adnImagen from './assets/image/proyect/adn.jpg';

import adnImagen1 from './assets/image/proyect/adn/1.png';
import adnImagen2 from './assets/image/proyect/adn/2.png';
import adnImagen3 from './assets/image/proyect/adn/3.png';
import adnImagen4 from './assets/image/proyect/adn/4.png';

import appadnImagen1 from './assets/image/proyect/appadn/1.png';
import appadnImagen2 from './assets/image/proyect/appadn/2.png';

import ewexImagen from './assets/image/proyect/wewex.jpeg';
import cvPdf from './assets/image/Yonathan_Rivas_J_18991815_CV.pdf';


const getInitialTheme = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const handleDownloadCV = () => {  
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Yonathan_Rivas_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const useTypingEffect = (lines, typingSpeed = 50, lineDelay = 500) => {
  const [typedLines, setTypedLines] = useState(Array(lines.length).fill(''));

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          setTypedLines(prev => {
            const newTypedLines = [...prev];
            newTypedLines[lineIndex] = lines[lineIndex].substring(0, charIndex + 1);
            return newTypedLines;
          });
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          lineIndex++;
          charIndex = 0;
          setTimeout(type, lineDelay);
        }
      }
    };

    const timeoutId = setTimeout(type, 500); 
    return () => clearTimeout(timeoutId);
  }, [lines, typingSpeed, lineDelay]);

  return typedLines;
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  const codeLines = [
    "const App = () => {",
    "  return { ",    
    "    Perfil: 'Full-Stack Developer',",
    "    Nombre: 'Yonathan Rivas Jiménez',",
    "    Email: 'dev.yonathan@gmail.com',",
    "    Localidad: 'Caracas, Venezuela',",
    "    WhatsApp: '+584247149824'",
    "  };",
    "};",
    "> npm run build",
    "Build successful in 1.2s"
  ];

  const typedCode = useTypingEffect(codeLines, 40, 300);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const openGallery = (images) => {
    setGalleryImages(images);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setGalleryImages([]);
  };

  const openVideo = (video) => {
    setVideoSrc(video);
    setIsVideoModalOpen(true);
  };

  const closeVideo = () => {
    setIsVideoModalOpen(false);
    setVideoSrc(null);
  };

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Habilidades', id: 'habilidades' },
    { name: 'Actualidad', id: 'banner-adicional' },
    { name: 'Experiencia', id: 'experiencia' },
    { name: 'Proyectos', id: 'proyectos' },
    { name: 'Contacto', id: 'contacto' },
  ];

  const certifications = [
    { img: plz01Image, title: 'Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo', url: 'https://platzi.com/p/foskert/curso/3221-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz02Image, title: 'Curso de Patrones de Diseño y Buenas Prácticas en PHP', url: 'https://platzi.com/p/foskert/curso/1630-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz03Image, title: 'Curso de Kotlin desde Cero', url: 'https://platzi.com/p/foskert/curso/2245-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz04Image, title: 'Curso de Introducción al Despliegue de Aplicaciones', url: 'https://platzi.com/p/foskert/curso/2011-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz05Image, title: 'Curso de Introducción a Laravel 9', url: 'https://platzi.com/p/foskert/curso/3039-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz06Image, title: 'Curso de Fundamentos de Python', url: 'https://platzi.com/p/foskert/curso/4227-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz07Image, title: 'Curso de Flujo de Desarrollo Moderno CodeStream', url: 'https://platzi.com/p/foskert/curso/2157-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz08Image, title: 'Curso de Configuración de Entorno de Desarrollo en Windows', url: 'https://platzi.com/p/foskert/curso/6900-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz09Image, title: 'Curso de API REST con PHP', url: 'https://platzi.com/p/foskert/curso/1638-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz10Image, title: 'Curso Básico de Manejo de Datos en Laravel con Eloquent ORM', url: 'https://platzi.com/p/foskert/curso/1920-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz11Image, title: 'Curso Básico de Diseño de Interfaces con Android Studio', url: 'https://platzi.com/p/foskert/curso/1825-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz12Image, title: 'Audiocurso de Salidas Profesionales para Desarrolladores de Aplicaciones Móviles', url: 'https://platzi.com/p/foskert/curso/4050-course/diploma/detalle/', date: 'Julio 2023', platform: 'Platzi' },
    { img: plz13Image, title: 'Fundamentos de Ingeniería de Software', url: 'https://platzi.com/p/foskert/curso/1098-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz14Image, title: 'Curso de Redes Informáticas de Internet', url: 'https://platzi.com/p/foskert/curso/2225-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz15Image, title: 'Curso de Prework: Configuración de Entorno de Desarrollo en macOS', url: 'https://platzi.com/p/foskert/curso/2214-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz16Image, title: 'Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones', url: 'https://platzi.com/p/foskert/curso/3222-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz17Image, title: 'Curso de Pensamiento Lógico: Lenguajes de Programación', url: 'https://platzi.com/p/foskert/curso/3223-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz18Image, title: 'Curso de Introducción a la Web: Historia y Funcionamiento de Internet I', url: 'https://platzi.com/p/foskert/curso/7924-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz19Image, title: 'Curso de Introducción a la Web: Historia y Funcionamiento de Internet II', url: 'https://platzi.com/p/foskert/curso/2053-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz20Image, title: 'Curso de Introducción a la Terminal y Línea de Comandos', url: 'https://platzi.com/p/foskert/curso/2292-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz21Image, title: 'Curso de Historia de la Programación: Lenguajes y Paradigmas', url: 'https://platzi.com/p/foskert/curso/2211-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz22Image, title: 'Curso de Buenas Prácticas y Código Limpio en C#.', url: 'https://platzi.com/p/foskert/curso/4788-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz23Image, title: 'Curso de Prework: Configuración de Entorno de Desarrollo en Linux', url: 'https://platzi.com/p/foskert/curso/2383-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz24Image, title: 'Curso Profesional de Git y GitHub', url: 'https://platzi.com/p/foskert/curso/1557-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz25Image, title: 'Curso de Programación Básica', url: 'https://platzi.com/p/foskert/curso/3208-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz26Image, title: 'Curso Básico de PHP: Instalación, Fundamentos y Operadores', url: 'https://platzi.com/p/foskert/curso/2646-course/diploma/detalle/', date: 'Agosto 2023', platform: 'Platzi' },
    { img: plz26Image, title: 'Acreditación como defensor estudiantil por la igual y equiparación de oportunidades a personas con discapacidad', url: null, date: 'Junio 2013', platform: 'MPPEU', type: 'Certificado' },
  ];



  const CertificationCard = ({ cert, onImageClick }) => (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-cyan-500/10 hover:shadow-cyan-500/20 h-full flex flex-col">
      <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative cursor-pointer" onClick={() => onImageClick(cert.img)}>
        <img 
          src={cert.img} 
          alt={`Certificado de ${cert.title}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-1">
            {cert.title}
          </h3>
          {cert.url && (
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white ml-3 flex-shrink-0"><ExternalLink size={20} /></a>
          )}
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">{cert.date}</span>
          <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">{cert.platform}</span>
          <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">{cert.type || 'Curso'}</span>
        </div>
      </div>
    </div>
  );

  return (
    // Configuración de tema base para soportar el modo claro/oscuro
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Modal para la imagen del certificado */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic en la imagen
          >
            <img 
              src={modalImage} 
              alt="Vista ampliada del certificado" 
              className="w-full h-full object-contain" 
            />
            <button onClick={closeModal} className="absolute top-2 right-2 text-white bg-black/30 rounded-full p-1 hover:bg-black/50 transition-colors">
              <XCircle size={28} />
            </button>
          </div>
        </div>
      )}
      
      {/* Modal para la galería de proyectos */}
      {isGalleryOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeGallery}
        >
          <div 
            className="relative w-full max-w-6xl h-[85vh] bg-transparent rounded-lg overflow-hidden flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeGallery} className="absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/50 rounded-full p-1 transition-colors">
              <XCircle size={32} />
            </button>
            
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={true}
              loop={true}
              className="w-full h-full"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center h-full">
                  <img 
                    src={img} 
                    alt={`Imagen de proyecto ${index + 1}`} 
                    className="max-w-full max-h-full object-contain mx-auto" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* Modal para Video */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeVideo} className="absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/50 rounded-full p-1 transition-colors">
              <XCircle size={32} />
            </button>
            <div className="w-full aspect-video">
              <video src={videoSrc} controls autoPlay className="w-full h-full">
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800' 
        : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                &lt;DevYonathan /&gt;
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 items-center">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === link.id 
                        ? 'text-cyan-600 dark:text-cyan-400' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                {/* Botón de CV (PDF) */}
                <button 
                  onClick={handleDownloadCV}
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-lg dark:shadow-cyan-500/20 shadow-cyan-500/30"
                  aria-label="Descargar CV"
                  title="Descargar CV"
                >
                  Descargar CV
                    <FileDown size={20} />
                </button>
                
                {/* Botón de tema */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Alternar tema"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Alternar tema"
              >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={handleDownloadCV}
                className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-base font-medium bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
              >
                <FileDown size={20} />
                <span>Descargar CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HOME */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src={bannerImage}
          alt="Fondo de banner tecnológico"
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />
        <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/70 z-0"></div>
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-50">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase bg-cyan-100 dark:bg-cyan-400/10 rounded-full border border-cyan-300 dark:border-cyan-400/20">
              Disponible para proyectos
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Construyendo el <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Futuro Digital
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
              Soy Yonathan Rivas, un Full Stack Developer apasionado por crear aplicaciones web y moviles escalables, intuitivas y de alto rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
              >
                Contáctame
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-cyan-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all dark:bg-slate-800 hover:bg-slate-100"
              >
                Ver Proyectos
              </button>
            </div>
            
           
          </div>
          
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-slate-100/80 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-300/20 dark:border-slate-700/50 rounded-2xl flex flex-col overflow-hidden shadow-2xl p-4 md:p-6">
                    <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="font-mono text-sm overflow-hidden whitespace-pre-wrap">
                        <p className="text-cyan-500 dark:text-cyan-400">{typedCode[0]}</p>
                        <p className="text-cyan-500 dark:text-cyan-400">{typedCode[1]}</p>
                         <p className="text-slate-400">
                          <span className="ml-4">{typedCode[2].substring(0, 12)}</span><span className="text-yellow-500">{typedCode[2].substring(12)}</span>
                        </p>
                         <p className="text-slate-400">
                          <span className="ml-4">{typedCode[3].substring(0, 12)}</span><span className="text-yellow-500">{typedCode[3].substring(12)}</span>
                        </p>
                        <p className="text-slate-400">
                          <span className="ml-4">{typedCode[4].substring(0, 12)}</span><a href="mailto:dev.yonathan@gmail.com" className="text-yellow-500 hover:underline">{typedCode[4].substring(12)}</a>
                        </p>
                        <p className="text-slate-400">
                          <span className="ml-4">{typedCode[5].substring(0, 16)}</span><span className="text-yellow-500">{typedCode[5].substring(16)}</span>
                        </p>
                        <p className="text-slate-400">
                          <span className="ml-4">{typedCode[6].substring(0, 15)}</span><a href="https://wa.me/584247149824" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">{typedCode[6].substring(15)}</a>
                        </p>
                        <p className="text-cyan-500 dark:text-cyan-400">{typedCode[7]}</p>
                        <p className="text-cyan-500 dark:text-cyan-400">{typedCode[8]}</p>
                        <p className="mt-4 text-green-400">{typedCode[9]}</p>
                        <p className="text-slate-400">{typedCode[10]}</p>
                        {/* Cursor parpadeante (solo se muestra cuando la animación no ha terminado) */}
                        {typedCode[10].length < codeLines[10].length && <span className="inline-block w-2 h-4 bg-slate-400 animate-pulse ml-1"></span>}
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-500">
          <ChevronDown size={32} />
        </div>
      </section>

     

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-slate-50 dark:bg-black/50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Conocimientos Tecnológicos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Herramientas y tecnologías que utilizo para dar vida a las ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frontend</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>Angular / TypeScript</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>React / Next.js</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>Vue / js</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>TypeScript</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>Tailwind CSS</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>Boostranp</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>HTML5 & CSS3</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Server className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Backend</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Java | Spring boot</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>PHP | Laravel</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Kotlin | Itellije</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Python | Django</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Node.js | Express</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>C# | ASP.NET</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Api REST</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Microservicios</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>RESTful APIs & GraphQL</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>WebSockets</li>
              </ul>
            </div>

            {/* Tools & DevOps */}
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Terminal className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">DevOps & Herramientas</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Git & GitHub</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Docker | Kubernetes</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Jenkins</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>AWS Services</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>CI/CD Pipelines</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-red-500/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Terminal className="text-red-600 dark:text-red-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Data Base & Herramientas</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>Oracle</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>PostgreSQL</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>MySQL</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>MariaDB</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>Firebase</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>Microsoft SQL Server</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:text-slate-400-purple-500/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-slate-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="text-slate-600 dark:text-slate-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Desarrollo Móvil</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>Kotlin | Android Nativo</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>Java | Android Nativo</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>Flutter | Dark</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>Ionic</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:text-slate-400-purple-500/50 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-slate-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="text-emerald-600 dark:text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Herramientas</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>Jira</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>Slack</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>Figma</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>Postman</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banner */}
      <section id="banner-adicional" className="py-0 bg-slate-100 dark:bg-slate-800/30 overflow-hidden">
        <div className="w-full h-[300px] md:h-[400px] relative group cursor-pointer">
          
          {/* Sombra sutil de pulso en el fondo (efecto dinámico) */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-30 blur-2xl animate-pulse"></div>

          {/* Imagen del programador (ocupa todo el espacio) */}
          <img 
            src={bannern8n} // 2. Usa la imagen importada
            alt="Programador profesional en un entorno corporativo moderno"
            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
            onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
            }}
          />
          
          {/* Overlay oscuro para mejorar el contraste con texto o sutil sombreado */}
          <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/10"></div>
          
          {/* Texto de la visión sobre el banner */}
          <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 lg:p-8 max-w-2xl">
             <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">
                N8N: AVANZANDO EL CONOCIMIENTO A TRAVÉS DE LA AUTOMATIZACIÓN
             </h3>
             <p className="text-slate-200 drop-shadow-md">
              Desbloquea el potencial. Acelera el descubrimiento. Adopta el futuro del trabajo.
             </p>
          </div>

        </div>
      </section>

      {/* Experience  */}
      <section id="experiencia" className="py-20 bg-white dark:bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experiencia Profesional</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Senior Full Stack Developer</h3>
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  2023 | 2025
                </span>
              </div>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">Toyota de Venezuela  C.A.</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Empresa líder en el área automotriz, con gestión de proyectos propios, desarrollo de una plataforma para 
                llevar las garantías, repuestos información empresaria, promociones y campañas de los vehículos con los DLS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Java</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Angular</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">TypeScrip</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Oracle</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Android</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Kotlin</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Spring Boot</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Flutter</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">TensorFlow</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Docker</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">keycloak</span>
              </div>
            </div>
            <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Developer</h3>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  2022 | 2023
                </span>
              </div>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">UPH & Blue </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Fintech con desarrollos a la medida de plataformas digitales que proporciona el intercambio de intercambio de divisas P2P. 
                Desarrollo de una plataforma de monetización de dinero para la compra de vehículos nuevos y usados.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Vue.js</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Laravel</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PHP</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PostgrSQL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Docker</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Java</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">GitHub</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">CI/CD</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Lenss</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Android</span>
              </div>
            </div>
            <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Android Developer</h3>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  2022 | 2023
                </span>
              </div>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">Maketicket </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Empresa dedicada a la venta de boletería para espectáculos, con desarrollos propios para la gestión de compra  de boletos como su logística.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Kotlin</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PHP</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Synfony</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">MySQL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">SQLite</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Jira</span>
              </div>
            </div>

            <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend Developer</h3>
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  2019 - 2023
                </span>
              </div>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">Zippytech </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Empresa consultora con desarrollo a la medida, sistema de gestión empresarial adecuado a los procesos de cualquier empresa. 
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Laravel</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PHP</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PostgreSQL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Docker</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Microsericios</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Postman</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">GitLat</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">CI/CD</span>
              </div>
            </div>
           <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Android Developer</h3>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0"> 
                  2018 - 2019
                </span>
              </div>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">TuID de vida </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Empresa de autenticación de identidad para la validación de vida en pensionados de argentina.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Android</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Java</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PostgreSQL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">SQLite</span>
              </div>
            </div>
            <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Developer</h3>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  2017 - 2019
                </span>
              </div>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">Srimark</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                 Empresa de consultoria que gestionaba proyectos a la medida construccion de sistemas empresariales a la medida.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Laravel</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Java</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PostgreSQL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">HTML</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">CSS</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">JavaScrit</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">MariaDB</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">GitHub</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Boostrap</span>
              </div>
            </div>

           <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Developer</h3>
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  2015 - 2016
                </span>
              </div>
              <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">OKO Tecnología</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Consultora dedicada al desarrollo de sistemas o soluciones empresariales tecnologías de empresas, implementando proyectos, 
                documentación, despliegues, levantamiento de información. Participación activa en code reviews y metodologías ágiles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Ionic</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PHP</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">MySQL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Java</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">C#</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">GitHub</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">HTML</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">CSS</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">JavaScrit</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">ASP.net</span>
              </div>
            </div>
           
            <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white dark:ring-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Developer</h3>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-400/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">2013 - 2015</span>
              </div>
             <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">ADN Software C.A.</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Empresa del sector tecnologíco concentrado en el desarrollo de un CRM  financioro.  
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Visual Basic</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">JavaScrit</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Html</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">CSS</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">PHP</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">MySQL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Java</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded">Android</span>
              </div>
              
            </div>

            
          </div>
        </div>
      </section>
      
      {/* Certification*/}
      <section id="certification" className="py-20 bg-slate-50 dark:bg-slate-500/30 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Cursos y Certificados</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Un reflejo de mi dedicación al aprendizaje continuo y a la maestría de nuevas tecnologías.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="!pb-12" // Añade padding-bottom para la paginación
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <CertificationCard cert={cert} onImageClick={openModal} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación personalizados */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 rounded-full shadow-md transition-colors">
            <ChevronLeft className="text-slate-700 dark:text-slate-200" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 rounded-full shadow-md transition-colors">
            <ChevronRight className="text-slate-700 dark:text-slate-200" />
          </div>

          <style>{`
            .swiper-pagination-bullet-active {
              background-color: #06b6d4 !important;
            }
          `}</style>
          </div>
      </section>

       {/* videos */}
      <section id="contacto" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Descubre las maravillas de la automatización</h2>
              <p className="text-slate-600 dark:text-slate-400">
                N8N trae para ti su innovador AI Workflow Builder (Beta), una herramienta revolucionaria que combina la potencia de la inteligencia artificial con la eficiencia de la automatización de flujos de trabajo.
              </p>
            </div>

            <iframe width="100%" height="450" src="https://www.youtube.com/embed/46fd56yw-8Y" title="Introducing AI Workflow Builder (Beta)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
        </div>
      </section>

      {/* Projects  */}
      <section id="proyectos" className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Proyectos Destacados</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Algunos de los trabajos de los que estoy más orgulloso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            {/* Project 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-cyan-500/10 hover:shadow-cyan-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                {/* Placeholder for project image */}
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-300 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={campaignImagen} // 2. Usa la imagen importada
                    alt="rctImagen"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                   App campaign Toyota.
                  </h3>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        campaignImagen1, 
                        campaignImagen2, 
                        campaignImagen3,
                        campaignImagen4,
                        campaignImagen5,
                        campaignImagen6,
                        campaignImagen7,
                        campaignImagen8
                      ])} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>
                      
                    </div>
                      <div className="flex space-x-3">
                       <button
                      onClick={() => openVideo('https://drive.google.com/file/d/14afZVj2vyMw1pWUfzD9kbXfxTFiFEA5T/view?usp=drive_link')}
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="Ver Video Demo"
                    >
                      <PlayCircle size={20} />
                    </button>
                  </div>
                  
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">

                  App que permite reconocer las placas de vehiculos con realidad aumentada para las campañas de Toyota.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Angular</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Python</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Java</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-blue-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-blue-500/10 hover:shadow-blue-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-300 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={campaignImagen} // 2. Usa la imagen importada
                    alt="rctImagen"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Sistema de Garantias RCT
                    </h3>
                  <div className="flex space-x-3">
                     <button
                      onClick={() => openVideo('https://drive.google.com/file/d/16P5-xn5_Wi1B2QO2aW10MIV1XiGezqXW/view?usp=drive_link')}
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="Ver Video Demo"
                    >
                      <PlayCircle size={20} />
                    </button>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Sistema web que permite la gestión de garantias y repuesto de veiculos, el mantenimiento programado y un modulo de promociones ligada a las garatias y campañas en Toyota de venezuela.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Angular</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Java</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Oracle</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Microservicios</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Python</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">GitHub</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Docker</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-300 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={rubickImage} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Sistema Rubick
                  </h3>
                  <div className="flex space-x-3">
                    <a href="https://zippyttech.com/rubick-2/"   target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Sistema integrado de gestión empresarial está conformado por diversos módulos interconectados por microservicios que brindan soporte a los distintos roles de la industria.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Angular</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Node</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">AWS</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Laravel</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Python</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-300 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={bukeImage} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Sistema Buke Wallet
                  </h3>
                  <div className="flex space-x-3">
                    <a href="https://zippyttech.com/bukewallet/"   target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Un sistema de intercambio de moneda estilo P2P (peer-to-peer) permite a los usuarios comprar y vender divisas directamente entre ellos, sin necesidad de intermediarios tradicionales como bancos o casas de cambio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Angular</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Node</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">AWS</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Laravel</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-300 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={yeguadaImage} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Sistema Yeguada
                  </h3>
                  <div className="flex space-x-3">
                    <a href="https://zippyttech.com/bukewallet/"   target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Un sistema de intercambio de moneda estilo P2P (peer-to-peer) permite a los usuarios comprar y vender divisas directamente entre ellos, sin necesidad de intermediarios tradicionales como bancos o casas de cambio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Angular</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Node</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">AWS</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Laravel</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-300 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={clubImage} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Sistema Club de Golf 
                  </h3>
                  <div className="flex space-x-3">
                    <a href="https://zippyttech.com/bukewallet/"   target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Un sistema de intercambio de moneda estilo P2P (peer-to-peer) permite a los usuarios comprar y vender divisas directamente entre ellos, sin necesidad de intermediarios tradicionales como bancos o casas de cambio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Angular</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Node</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">AWS</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Laravel</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>

             {/* Project 6 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={makeImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    App de Operaciones de Eventos
                  </h3>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        makeScamImagen1, 
                        makeScamImagen2,
                        makeScamImagen3,
                        makeScamImagen4,
                        makeScamImagen5,
                        makeScamImagen6,
                        makeScamImagen7,
                        makeScamImagen8,
                        makeScamImagen9,
                        makeScamImagen10,
                        makeScamImagen11,                        makeScamImagen12,
                        makeScamImagen13
                      ])} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                 Solución integral para la gestión de eventos en tiempo real, optimizando el control de acceso y la logística operativa para una experiencia impecable.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Synphony</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Java</span>
                </div>
              </div>
            </div>

            {/* Project 7 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={makeImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    App de Seguimiento Operaciones para Productores
                  </h3>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        makeProductImagen1, 
                        makeProductImagen2,
                        makeProductImagen3,
                        makeProductImagen4,
                        makeProductImagen5,
                        makeProductImagen6,
                        makeProductImagen7,
                        makeProductImagen8,
                        makeProductImagen9,
                        makeProductImagen10,
                        makeProductImagen11,
                        makeProductImagen12,
                        makeProductImagen13
                      ])} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
 Solución integral para la gestión de eventos  con productores en tiempo real, revisando el control de pagos assecos  y la logística operativa para los eventos.
                
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Synphony</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Java</span>
                </div>
              </div>
            </div>

            {/* Project 8 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={ewexcarImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    App de uber para servicios de transporte
                  </h3>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        ewexAppImagen1, 
                        //ewexAppImagen2,
                        ewexAppImagen3,
                        ewexAppImagen4, 
                        ewexAppImagen5,
                        ewexAppImagen6,
                        ewexAppImagen7, 
                        ewexAppImagen8,
                        ewexAppImagen9,
                        ewexAppImagen10, 
                        ewexAppImagen11,
                        ewexAppImagen12
                      ])} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
Plataforma de intermediación digital diseñada para conectar la demanda de movilidad de usuarios finales con una red de proveedores de transporte independientes. El sistema integra geolocalización en tiempo real,
 un algoritmo de asignación de rutas optimizado y un módulo de procesamiento de pagos automatizado para garantizar la trazabilidad de cada servicio .               </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Laravel</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Java</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">PHP</span>
                </div>
              </div>
            </div>
            {/* Project 9 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={ewexcarImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                   Fintech ExexCar sistema de ahorro planificado para compra de vehículos.
                  </h3>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        ewexImagen
                      ]
                      )} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
Plataforma tecnológica financiera (Fintech) diseñada para la gestión de fondos de ahorro programado con fin específico. El sistema permite la 
estructuración de planes de aportaciones periódicas, vinculando el capital acumulado con 
protocolos de adjudicación para la adquisición de vehículos, garantizando la trazabilidad y la integridad de los fondos mediante un ecosistema digital                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Java</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
            {/* Project 10 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={ewexcarImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Segun2 sistema de intercambio de divisas.
                  </h3>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        segundoImagen1,
                        segundoImagen2,
                        segundoImagen3,
                        segundoImagen4,
                        segundoImagen5,
                        segundoImagen6,
                        segundoImagen7,
                        segundoImagen8,
                        segundoImagen9,
                        segundoImagen10,
                      ]
                      )} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Un sistema de intercambio de moneda estilo P2P (peer-to-peer) permite a los usuarios comprar y vender divisas directamente entre ellos, sin necesidad de intermediarios tradicionales como bancos o casas de cambio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Java</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
            {/* Project 11 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={tuidImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Segun2 sistema de intercambio de divisas.
                  </h3>
                  <div className="flex space-x-3">
                    <a href="https://play.google.com/store/apps/details?id=com.autenticar.tuid&hl=es_VE"   target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"><ExternalLink size={20} /></a>
                  </div>
                  </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Un sistema de intercambio de moneda estilo P2P (peer-to-peer) permite a los usuarios comprar y vender divisas directamente entre ellos, sin necesidad de intermediarios tradicionales como bancos o casas de cambio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Java</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
            {/* Project 12 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={adnImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Sistema OCR para escritorio
                  </h3>
                 <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        adnImagen1, 
                        adnImagen2,
                        adnImagen3,
                        adnImagen4
                      ])} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Un sistema de intercambio de moneda estilo P2P (peer-to-peer) permite a los usuarios comprar y vender divisas directamente entre ellos, sin necesidad de intermediarios tradicionales como bancos o casas de cambio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Java</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
            {/* Project 13 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 group hover:border-purple-500 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10 hover:shadow-purple-500/20">
              <div className="h-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="text-6xl text-slate-300 dark:text-slate-700 font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={adnImagen} // 2. Usa la imagen importada
                    alt="bukewallet"
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/1200x400/334155/ffffff?text=Banner+Imagen+No+Cargada"; 
                    }}
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    App de pedidos para sistema OCR
                  </h3>
                 <div className="flex space-x-3">
                    <button 
                      onClick={() => openGallery([
                        appadnImagen1, 
                        appadnImagen2
                      ])} // TODO: Importar y usar imágenes de assets/image/proyect/campaign
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      title="Ver Galería"
                    > <Images size={20} /></button>                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Un sistema de intercambio de moneda estilo P2P (peer-to-peer) permite a los usuarios comprar y vender divisas directamente entre ellos, sin necesidad de intermediarios tradicionales como bancos o casas de cambio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Kotlin</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">SQLite</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Java</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">PHP</span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      {0/* Contact Section */}
      <section id="contacto" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">¿Listo para comenzar un proyecto?</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Estoy disponible para trabajos freelance y oportunidades a tiempo completo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Información de contacto</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  No dudes en contactarme si tienes alguna pregunta o simplemente quieres saludar.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-slate-900 dark:text-white">dev.yonathan@gmail.com.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/yonathan-rivas-jim%C3%A9nez-504b4ab8/" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:underline">
                      linkedin.com/in/yonathan-rivas
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-slate-900 dark:text-white font-medium mb-3">Sígueme</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/yonathan-rivas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-600 dark:text-slate-300">
                      <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/yonathan-rivas-jim%C3%A9nez-504b4ab8/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-600 dark:text-slate-300">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:dev.yonathan@gmail.com" className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-pink-500 hover:text-white flex items-center justify-center transition-all duration-300 text-slate-600 dark:text-slate-300">
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group">
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} DevYonathan. Construido con React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
