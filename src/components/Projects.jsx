import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useFetch } from "@/hooks/useFetch";
import CardProjects from "./CardProjects";
import { useApiContext } from "./context/Context";
import english from './languages/en/global.json';
import spanish from './languages/es/global.json';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

const Projects = () => {
    const { language } = useApiContext();
    // Navigation carousel config
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const { data, loading } = useFetch("/api/getProjects");

    return (
        <>

            <section id="projects" className="py-5 container px-sm-5  blur-background-about mt-presentation">
                <div className="ms-4">
                    <h1 className="display-3 mb-5 ms-1 ms-sm-4 pt-5 text-white">{language === 'es' ? `${spanish?.projects?.title}` : `${english?.projects?.title}`}</h1>
                </div>

                <div className="center pt-swipers mb-5">
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={1}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            1: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1199: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {data?.projects?.map((project) => (
                            <SwiperSlide key={project.id} className="card-project">

                                <CardProjects

                                    name={project.name}
                                    tech={project.tech}
                                    image={project.image}
                                    deploy={project.deploy}
                                    repository={project.repository}
                                />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Projects;