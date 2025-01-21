import React from 'react';
import { useLocation } from 'react-router-dom';

const DetallesCarrera = () => {
  const location = useLocation();

  // Definir información diferente según la ruta
  const detallesPorRuta = {
    '/carreras-ingenierias-industrial': {
      nombre: "Perfil Profesional",
      descripcion: "Ingeniero Industrial con sólida formación en análisis de procesos, optimización de recursos y gestión organizacional. Especializado en la mejora continua de sistemas productivos mediante metodologías como Lean Manufacturing, Six Sigma y Kaizen. Competente en la planificación estratégica, diseño de cadenas de suministro, control de calidad y evaluación de costos para maximizar la rentabilidad empresarial.",
      habilidades:"Optimización de procesos, Gestión de la calidad, Análisis de datos, Gestión de proyectos, Logística y cadenas de suministros y Automatización industrial.",
      competencias:"Liderazgo y trabajo en equipo, Resolución de problemas complejos, Habilidades de comunicación efectiva y negociación y Pensamiento estratégico y adaptabilidad frente al cambio.",
      areas:"Mannufactura avanzada, Gestión de la sostenibilidad empresarial, Diseño e implementación de sistemas de mantenimiento productivo(TPM) e Ingeniería financiera para proyectos industriales.",
      duracion: "5 años",
      pdf: "/pdf/ingenieria-industrial.pdf",
    },
    '/carreras-ingenierias-sistemas': {
      nombre: "Perfil profesional",
      descripcion: "Ingeniero en Sistemas con experiencia en el diseño, desarrollo y gestión de soluciones tecnológicas orientadas a la eficiencia operativa y la innovación empresarial. Con sólidos conocimientos en programación, administración de bases de datos, redes y seguridad informática, aplicado en proyectos de integración tecnológica, optimización de procesos y desarrollo de software a medida.",
      habilidades:"Desarrollo de software, Gestión de bases de datos, Arquitectura de sistemas, Seguridad informática, Automatización y gestión de procesos y Administración de redes y sistemas.",
      competencias:"Toma de decisiones basadas en datos, Trabajo en equipo y colaboración multidisciplinarias, Capacidad de adaptación ante el cambio tecnológico, Pensamiento analítico para la resolución de problemas complejos y Habilidades de liderazgo en proyectos de integración tecnológica.",
      areas:"Desarrollo web y móvil, Inteligencia artificial y Machine Learning, Big Data y análisis de TI y virtualización, Cloud computing(AWS, Azure, Google Cloud) e Internet de las cosas(loT) y dispositivos conectados.",
      duracion: "4 años",
      pdf: "/pdf/ingenieria-sistemas.pdf",
    },
    '/carreras-ingenierias-electronica': {
      nombre: "Perfil Profesional",
      descripcion: "Ingeniero Electrónico con experiencia en el diseño, desarrollo e implementación de soluciones electrónicas y de automatización industrial. Amplio conocimiento en circuitos electrónicos, sistemas embebidos, procesamiento de señales y control, así como en la integración de tecnologías en la industria 4.0. Orientado a la creación de productos electrónicos de alta fiabilidad, eficiencia y rendimiento.",
      habilidades:"Diseño de circuitos electrónicos, Ssitemas embebidos, Automatización industrial, Procesamiento de señales, Electrónica de potencia y Telecomunicaciones.",
      competencias:"Capacidad de resolción de problemas técnicos complejos, Colaboración efectiva con equipos multidisciplinarios, Gestión de proyectos de investigación y desarrollo de soluciones electrónicas, Habilidades para la comunicación técnica y la elaboración de informes técnicos y Pensamiento crítico en la búsqueda de innovaciones tecnológicas.",
      areas:"Diseño de circuitos electrónicos y PCB, Sistemas embebidos y desarrollo firmware, Redes y comunicaciones electrónicas, Control automático y robótica, Electrónica de potencia y sistemas de energía renovable e Internet de las Cosas(loT) y dispositivos conectados.",
      duracion: "5 años",
      pdf: "/pdf/ingenieria-electronica.pdf",
    },
    '/carreras-maestrias-ingenieria': {
      nombre: "Perfil Profesional",
      descripcion: "Ingeniero con Maestría en Ingeniería, especializado en [área de especialización específica], con una sólida formación técnica avanzada y experiencia en la investigación y desarrollo de soluciones innovadoras. Orientado a la mejora continua de sistemas, productos y procesos mediante un enfoque multidisciplinario, con amplios conocimientos en la gestión de proyectos de ingeniería y la implementación de tecnologías disruptivas que impulsan la competitividad y el crecimiento empresarial.",
      habilidades:"Investigación y desarrollo tecnológico, Gestión de proyectos complejos, Optimización de sistemas y procesos, Modelado y simulación, Innovación y automatización y Análisis de datos y Big Data.",
      competencias:"Liderazgo académico y empresarial, Comunicación efectiva, Capacidad crítica y estratégica y Adaptabilidad tenológica.",
      areas:"Ingeniería industrial avanzada y optimización de procesos, Control automático, robótica y sistemas inteligentes, Nanotecnología o biotecnología (dependiendo del área de la maestría), Inteligencia artificial y aprendizaje automático (Machine Learning, Deep Learning) y Gestión de la innovación y proyectos tecnológicos.",
      duracion: "2 años",
      pdf: "/pdf/maestria-ingenieria.pdf",
    },
    '/carreras-doctorados-informatica': {
      nombre: "Perfil Profesional",
      descripcion: "Doctor en Informática con una sólida trayectoria en investigación y desarrollo de soluciones innovadoras en áreas como inteligencia artificial, sistemas distribuidos, computación de alto rendimiento, seguridad informática y teoría de la computación. Comprometido con la creación de nuevas teorías, algoritmos avanzados y arquitecturas que aborden los desafíos tecnológicos más complejos. Habilidad para liderar equipos multidisciplinarios y gestionar proyectos de investigación de alto impacto que impulsan la evolución de la informática.",
      habilidades:"Investigación en algoritmos y teorías computacionales, Inteligencia Artificial y Machine Learning de vanguardia, Computación de alto rendimiento (HPC) y Big Data, Ciberseguridad avanzada y criptografía, Redes y sistemas distribuidos complejos y Teoría de la computación y lenguajes formales.",
      competencias:"Liderazgo en investigación y docencia, Pensamiento innovador y resolución de problemas complejos, Colaboración internacional y trabajo en equipo y Comunicación técnica avanzada.",
      areas:"Inteligencia artificial avanzada y Deep Learning, Teoría de la computación, algoritmos y complejidad computacional, Computación en la nube, Big Data y optimización de procesos, Ciberseguridad, criptografía y protección de la privacidad de datos, Redes de comunicaciones avanzadas y computación distribuida e Interacción humano-computadora y tecnologías emergentes.",
      duracion: "6 años",
      pdf: "/pdf/doctorado-informatica.pdf",
    },
    '/carreras-maestrias-cienciascomputacionales': {
      nombre: "Perfil Profesional",
      descripcion: "Profesional con Maestría en Ciencias Computacionales, con un enfoque integral en la teoría y aplicación de las ciencias computacionales para resolver problemas complejos mediante el desarrollo de software, la investigación en algoritmos avanzados, y la implementación de soluciones innovadoras. Experto en el diseño y análisis de sistemas computacionales, inteligencia artificial, y computación avanzada, con un fuerte énfasis en el aprendizaje automático y la optimización de procesos mediante tecnologías emergentes.",
      habilidades:"Algoritmos y estructuras de datos avanzadas, Inteligencia artificial (IA), Computación en la nube y Big Data, Computación paralela y distribución, Desarrollo de software y programación avanzada y Seguridad informática y criptografía.",
      competencias:"Liderazgo en equipos de investigación tecnológica, Toma de decisiones basadas en datos, Pensamiento crítico y resolución de problemas y Comunicación efectiva.",
      areas:"Algoritmos y optimización computacional, Inteligencia Artificial y Machine Learning, Computación en la nube y Big Data, Sistemas de bases de datos avanzados, Teoría de la computación y lenguajes formales y Ciberseguridad y criptografía.",
      duracion: "2 años",
      pdf: "/pdf/doctorado-informatica.pdf",
    },
    '/carreras-doctorados-fisica': {
      nombre: "Perfil Profesional",
      descripcion: "Doctor en Física con especialización en [área específica de la física], con experiencia en investigación avanzada, modelado matemático y desarrollo de soluciones innovadoras en el campo de la física. Comprometido con la exploración de fenómenos físicos fundamentales y su aplicación en áreas de alta tecnología, como la física de materiales, la astrofísica, la nanotecnología, la física cuántica o las energías renovables. Con una fuerte capacidad para liderar proyectos de investigación multidisciplinarios, colaborar con equipos internacionales y generar avances tecnológicos que impactan en diversos sectores.",
      habilidades:"Investigación y resolución de problemas complejos, Física teórica y modelado matemático, Investigación experimental, Computación científica, Física aplicada y tecnologías emergentes y Nanofísica y física de materiales.",
      competencias:"Liderazgo en investigación científica, Trabajo interdisciplinario, Comunicación de resultados científicos y Capacidad crítica y analítica.",
      areas:"Física teórica y matemática avanzada, Física experimental y desarrollo de instrumentos científicos, Física de materiales y nanofísica, Física de partículas y cosmología, Física computacional y simulación numérica y Energías renovables y física aplicada.",
      duracion: "7 años",
      pdf: "/pdf/doctorado-informatica.pdf",
    },

    // Puedes agregar más rutas aquí
  };

  // Obtener los detalles según la ruta actual
  const carrera = detallesPorRuta[location.pathname] || {
    nombre: "Carrera no encontrada",
    descripcion: "No se han encontrado detalles para esta carrera.",
    duracion: "-",
    pdf: "#",
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-xl font-bold">{carrera.nombre}</h2>
      <p className="mt-2 text-sm sm:text-base">{carrera.descripcion}</p>
      <p className="mt-2 text-sm sm:text-base">
        <strong>Habilidades Principales: </strong>{carrera.habilidades}
      </p>
      <p className="mt-2 text-sm sm:text-base">
        <strong>Competencias Blandas: </strong>{carrera.competencias}
      </p>
      <p className="mt-2 text-sm sm:text-base">
        <strong>Areas de Especialización: </strong>{carrera.areas}
      </p>
      <p className="mt-2 text-sm sm:text-base">
        <strong>Duración:</strong> {carrera.duracion}
      </p>
      <div className="flex justify-center">
      <a 
        href={carrera.pdf} 
        className="text-stone-100 justify-center bg-red-800 p-4 rounded mt-2 inline-block hover:bg-red-700" 
        download
      >
        Descargar PDF
      </a>
      </div>
      
    </div>
  );
};

export default DetallesCarrera;
