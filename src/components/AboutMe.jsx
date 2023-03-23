// import React, { useState } from "react";
// import { useFetch } from "@/hooks/useFetch";

// const AboutMe = () => {

//     return (
//         <>

//             <section id="about-me" className="height-page mt-presentation">

//                 <div className="container blur-background-about px-sm-5 px-0 mt-3">
//                     <div className="ms">
//                 <h1 className="display-3 mb-4 ms-5  pt-5 text-white">SOBRE MÍ</h1></div>
//                     <div className="row gx-5 align-items-center">
//                         <div className="col-lg-6 col-12 order-lg-2">
//                             <img className="p-5 ms-4 ms-sm-5 mb-5 img-fluid w-75"
//                                 src="/img/computer.webp" alt="..." />
//                                 </div>

//                             <div className="col-lg-6 col-12 order-lg-1">
//                                 <div className="p-3 home__text">
//                                     <p className="text-justify pb-3 text-white small">Mi nombre es Alex Zorzin y soy un desarrollador web Full-Stack de Buenos Aires, Argentina.

// Estoy interesado en comenzar mi carrera como desarrollador y estoy en busca de oportunidades para crecer y aprender de forma activa en un equipo innovador.

// Mi objetivo es trabajar en proyectos emocionantes y desafiantes para poder aplicar mis habilidades y conocimientos de manera práctica y continuar aprendiendo de forma constante. Soy un apasionado del ámbito de la programación y estoy dispuesto a esforzarme al máximo para ser un activo valioso para cualquier equipo de desarrollo.</p>
                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//         </>
//     )
// }

// export default AboutMe;

import React from "react";
import { useApiContext } from "./context/Context";
import english from './languages/en/global.json';
import spanish from './languages/es/global.json';

const AboutMe = () => {
  const { language } = useApiContext();

  return (
    <>
      <section id="about-me" className="height-page mt-presentation">
        <div className="container blur-background-about px-sm-5 px-0 mt-3">
          <div className="ms">
            <h1 className="display-3 mb-4 ms-5  pt-5 text-white">
            {language === 'es' ? `${spanish?.aboutMe?.title}` : `${english?.aboutMe?.title}`}
            </h1>
          </div>
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 col-12 order-lg-2">
              <img
                className="p-5 ms-4 ms-sm-5 mb-5 img-fluid w-75"
                src="/img/computer.webp"
                alt="computer"
              />
            </div>
            <div className="col-lg-6 col-12 order-lg-1">
              <div className="p-3 home__text">
                <p className="text-justify pb-3 text-white small">
                {language === 'es' ? `${spanish?.aboutMe?.content}` : `${english?.aboutMe?.content}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;