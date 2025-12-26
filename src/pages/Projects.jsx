import React from "react";
import InfiniteMenu from "../components/InfiniteMenu";
import ShapeOverlay from "../components/ShapeOverlay";
import TargetCursor from "../components/TargetCursor";
import Navbar from "../components/Navbar";

// 📸 IMPORTAR IMÁGENES (Vite + Vercel friendly)
import softwarePos from "../assets/Proyectos/softwarePos.png";
import aetheris from "../assets/Proyectos/Aetheris.png";
import ecommerce from "../assets/Proyectos/Ecommerce.png";
import netquesma from "../assets/Proyectos/netquesma.png";
import pazMental from "../assets/Proyectos/PazMental.png";
import focusUp from "../assets/Proyectos/FocusUp.jpeg";
import luda from "../assets/Proyectos/Luda.png";

const Projects = () => {
  const items = [
    {
      image: softwarePos,
      link: "https://youtu.be/geUbkSOO6pg",
      title: "Sistema POS",
      description: "Sistema completo para la gestión de ventas e inventario.",
      tags: [
        "React",
        "Electron",
        "Node.js",
        "PostgreSQL",
        "TailwindCSS",
        "Prisma",
      ],
    },
    {
      image: aetheris,
      link: "https://aetheris-chi.vercel.app",
      title: "Aetheris",
      description: "Landing Page para una empresa de desarrollo de software.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: ecommerce,
      link: "https://ecommerce-three-kappa-21.vercel.app",
      title: "Ecommerce",
      description:
        "Ecommerce funcional con carrito de compras y pasarela de pago.",
      tags: ["React", "Tailwind", "Platzi Fake Store API", "Epayco"],
    },
    {
      image: netquesma,
      link: "https://youtu.be/wahjOJFHE7s",
      title: "Landing page para NetQueSMA",
      description:
        "Landing page responsiva para una empresa de servicios de internet.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: pazMental,
      link: "https://youtu.be/wahjOJFHE7s",
      title: "Paz Mental",
      description: "Aplicación móvil para meditación y bienestar mental.",
      tags: ["Kotlin"],
    },
    {
      image: focusUp,
      link: "https://github.com/Cromero100/Focus-Up",
      title: "FocusUp",
      description:
        "Aplicación móvil para el seguimiento de objetivos y productividad.",
      tags: ["React Native", "MongoDB", "Node.js"],
    },
    {
      image: luda,
      link: "https://youtu.be/5A5gCF2eJg4",
      title: "Luda",
      description: "Aplicación web para el cuidado mental.",
      tags: ["Next.js", "MongoDB", "Node.js"],
    },
  ];

  return (
    <div className="h-screen text-white">
      <Navbar />
      <ShapeOverlay />
      <TargetCursor spinDuration={2} hideDefaultCursor />
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Projects;
