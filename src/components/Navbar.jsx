import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/sobremi" },
  { name: "Proyectos", path: "/proyectos" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop */}
      <div
        className="hidden md:flex items-center gap-1 px-2 py-2
                   rounded-full bg-zinc-900/70 backdrop-blur
                   border border-zinc-800 shadow-lg"
      >
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative px-5 py-2 rounded-full text-sm transition
               ${
                 isActive
                   ? "text-zinc-100"
                   : "text-zinc-400 hover:text-zinc-200"
               }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full
                                   bg-indigo-500/20
                                   border border-indigo-400/30"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-3 rounded-2xl bg-zinc-900/80 backdrop-blur
                   border border-zinc-800 text-zinc-200"
      >
        <HiMenuAlt3 size={22} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden">
          <div
            className="absolute top-6 left-1/2 -translate-x-1/2
                       w-[90%] rounded-3xl bg-zinc-900
                       border border-zinc-800 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-200 font-semibold">Menú</span>
              <button onClick={() => setOpen(false)}>
                <HiX size={22} className="text-zinc-400" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl transition
                     ${
                       isActive
                         ? "bg-indigo-500/20 text-indigo-400"
                         : "bg-zinc-800/50 text-zinc-300 hover:bg-indigo-500/10"
                     }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
