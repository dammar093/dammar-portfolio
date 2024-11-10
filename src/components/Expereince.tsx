import React from "react";
import {
  FaHtml5,
  FaJsSquare,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaGithub,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiRedux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const icons = [
  {
    id: 1,
    color: "text-orange-600",
    Icon: FaHtml5,
  },
  {
    id: 2,
    color: "text-blue-600",
    Icon: FaCss3,
  },
  {
    id: 3,
    color: "text-yellow-600",
    Icon: FaJsSquare,
  },
  {
    id: 4,
    color: "text-sky-600",
    Icon: FaReact,
  },
  {
    id: 5,
    color: "text-slate-600",
    Icon: RiNextjsLine,
  },
  {
    id: 6,
    color: "text-sky-600",
    Icon: RiTailwindCssFill,
  },
  {
    id: 7,
    color: "text-purple-600",
    Icon: FaBootstrap,
  },
  {
    id: 8,
    color: "text-green-600",
    Icon: FaNodeJs,
  },
  {
    id: 9,
    color: "text-slate-600",
    Icon: SiExpress,
  },
  {
    id: 10,
    color: "text-blue-600",
    Icon: SiMysql,
  },
  {
    id: 11,
    color: "text-green-600",
    Icon: SiMongodb,
  },
  {
    id: 12,
    color: "text-purple-600",
    Icon: FaPhp,
  },
  {
    id: 13,
    color: "text-orange-600",
    Icon: FaJava,
  },
  {
    id: 14,
    color: "text-slate-700",
    Icon: FaGithub,
  },
  {
    id: 15,
    color: "text-orange-700",
    Icon: FaFigma,
  },
  {
    id: 16,
    color: "text-purple-600",
    Icon: SiRedux,
  },
  {
    id: 17,
    color: "text-orange-600",
    Icon: FaGitAlt,
  },
  {
    id: 18,
    color: "text-orange-600",
    Icon: FaGitAlt,
  },
  {
    id: 19,
    color: "text-blue-600",
    Icon: BiLogoTypescript,
  },
];

const Expereince = () => {
  return (
    <section className="mt-8 p-2 md:px-10 lg-px-32">
      <div>
        <h2 className="text-slate-700 font-semibold text-2xl capitalize">
          About my Skills
        </h2>
        <p className="text-slate-600 font-medium">
          I honed my skills on several programming languases, framworks and
          libraries.
        </p>
      </div>
      <div className="mt-8">
        <div className="flex justify-center gap-1 md:gap-3">
          {icons.map((icon, i) => {
            if (i < 6)
              return (
                <div
                  key={icon.id}
                  className="flex justify-center items-center p-2 rounded-full bg-blue-200 w-fit hover:rotate-180 hover:bg-blue-400/80 transition-all cursor-pointer shadow-sm"
                >
                  <icon.Icon className={`${icon.color} text-4xl `} />
                </div>
              );
          })}
        </div>
        <div className="flex justify-center gap-1 md:gap-3 mt-2">
          {icons.map((icon, i) => {
            if (i > 4 && i < 10)
              return (
                <div
                  key={icon.id}
                  className="flex justify-center items-center p-2 rounded-full bg-blue-200 w-fit hover:rotate-180 hover:bg-blue-400/80 transition-all cursor-pointer shadow-sm"
                >
                  <icon.Icon className={`${icon.color} text-4xl `} />
                </div>
              );
          })}
        </div>
        <div className="flex justify-center gap-1 md:gap-3 mt-2">
          {icons.map((icon, i) => {
            if (i > 9 && i < 14)
              return (
                <div
                  key={icon.id}
                  className="flex justify-center items-center p-2 rounded-full bg-blue-200 w-fit hover:rotate-180 hover:bg-blue-400/80 transition-all cursor-pointer shadow-sm"
                >
                  <icon.Icon className={`${icon.color} text-4xl `} />
                </div>
              );
          })}
        </div>
        <div className="flex justify-center mt-2 gap-1 md:gap-2">
          {icons.map((icon, i) => {
            if (i >= 14 && i < 17)
              return (
                <div
                  key={icon.id}
                  className="flex justify-center items-center p-2 rounded-full bg-blue-200 w-fit hover:rotate-180 hover:bg-blue-400/80 transition-all cursor-pointer shadow-sm"
                >
                  <icon.Icon className={`${icon.color} text-4xl `} />
                </div>
              );
          })}
        </div>
        <div className="flex justify-center mt-2">
          {icons.map((icon, i) => {
            if (i == 18)
              return (
                <div
                  key={icon.id}
                  className="flex justify-center items-center p-2 rounded-full bg-blue-200 w-fit hover:rotate-180 hover:bg-blue-400/80 transition-all cursor-pointer shadow-sm"
                >
                  <icon.Icon className={`${icon.color} text-4xl `} />
                </div>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expereince;
