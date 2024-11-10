import Image from "next/image";
import React from "react";
import Link from "next/link";
import mart from "../../public/mart.png";
import ecommerce from "../../public/ecoomerce.png";
import admin from "../../public/admin.png";
import jmc from "../../public/jmc.png";
import password from "../../public/password.png";
import url from "../../public/url.png";
import typping from "../../public/typping.png";

const projects = [
  {
    id: 1,
    title: "Hamro Mart",
    image: mart,
    link: "https://github.com/dammar093/ecommerce",
  },
  {
    id: 2,
    title: "Dyams Shop",
    image: ecommerce,
    link: "https://dyams-shop.vercel.app/",
  },
  {
    id: 3,
    title: "Admin Panel",
    image: admin,
    link: "https://admin-dashboard-nu-plum.vercel.app/",
  },
  {
    id: 4,
    title: "Janjyoti Multiple Campus",
    image: jmc,
    link: "https://dammar093.github.io/jmc3.0/",
  },
  {
    id: 5,
    title: "Passowrd Generator",
    image: password,
    link: "https://dammar093.github.io/jmc3.0/",
  },

  {
    id: 6,
    title: "URL Shortener",
    image: url,
    link: "https://github.com/dammar093/url-shortener",
  },
  {
    id: 7,
    title: "Typping Master",
    image: typping,
    link: "https://dammar093.github.io/typingMaster/",
  },
];
const Projects = () => {
  return (
    <section className="mt-8 p-2 md:px-10 lg-px-32">
      <div>
        <h2 className="text-slate-700 font-semibold text-2xl capitalize">
          About my Projects
        </h2>
        <p className="text-slate-600 font-medium">
          I build some awesome projects during my learning phase.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center">
        {projects.map((project) => {
          return (
            <Link
              href={project.link}
              key={project.id}
              className="border shadow-md bg-blue-300 p-2 rounded 
              transition-all delay-75 hover:scale-105 place-content-center"
            >
              <div className=" w-[173px] md:w-[220px] overflow-hidden ">
                <Image
                  className="aspect-video rounded-sm max-w-[92%]"
                  src={project.image}
                  alt={project.title}
                  width={190}
                  height={190}
                />
              </div>
              <span>{project.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
