"use client";

import { Github, GithubIcon } from "lucide-react";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="800"
          height="800"
          alt="Avatar"
        />
        <div className=" flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes imaginarlo
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                3000,
                "lo puedes lograr",
                3000,
                "puedes crearlo",
                3000,
                "puedes intentarlo",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
            Como desarrollador fullstack, me dedico a combinar diseño y
            funcionalidad para crear experiencias digitales impactantes,
            responsivas y accesibles.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-5">
            <a
              target="_blank"
              href="https://wa.me/+5804243678907"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Contacta conmigo
            </a>
            <a
              href="https://github.com/JavierASU"
              target="_blank"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-whithe border-white rounded-xl hover:shadow-xl hover:shadow-white"
            >
              <GithubIcon color="#FF8000" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
