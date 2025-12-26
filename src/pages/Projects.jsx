import React from "react";
import InfiniteMenu from "../components/InfiniteMenu";
const Projects = () => {
  const items = [
    {
      image: "src/assets/Proyectos/softwarePos.png",
      link: "https://youtu.be/geUbkSOO6pg",
      title: "Sistema Pos",
      description: "Sistema completo para la gestión de vetas e inventario.",
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
      image: "src/assets/Proyectos/Aetheris.png",
      link: "https://aetheris-chi.vercel.app",
      title: "Aetheris",
      description: "Landing Page para una empresa de desarrollo de software.",
      tags: ["Html", "Css", "JavaScript"],
    },
    {
      image: "src/assets/Proyectos/Ecommerce.png",
      link: "https://ecommerce-three-kappa-21.vercel.app",
      title: "Ecommerce",
      description:
        " Ecommerce funcional con carrito de compras y pasarela de pago.",
      tags: ["React", "Tailwind", "Platzi Fake Store API", "Epayco"],
    },
    {
      image: "src/assets/Proyectos/netquesma.png",
      link: "https://youtu.be/wahjOJFHE7s",
      title: "Landing page para NetQueSMA",
      description:
        "Landing page responsiva para una empresa de servicios de internet.",
      tags: ["Html", "Css", "JavaScript"],
    },
    {
      image: "src/assets/Proyectos/PazMental.png",
      link: "https://youtu.be/wahjOJFHE7s",
      title: "Paz Mental",
      description: "Aplicación móvil para meditación y bienestar mental.",
      tags: ["Kotlin"],
    },
  ];

  return (
    <div className="h-screen h-screen text-white">
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Projects;
