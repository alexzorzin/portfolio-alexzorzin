import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useFetch } from "@/hooks/useFetch";
import CardSkills from "./CardSkills";
import { useApiContext } from "./context/Context";
import english from './languages/en/global.json';
import spanish from './languages/es/global.json';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Skills = () => {
    const { language } = useApiContext();
    // Navigation carousel config
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    // Get all skills data
    const { data, loading } = useFetch("/api/getSkills");

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredSkills, setFilteredSkills] = useState(data?.skills);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        console.log(category);
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredSkills(data?.skills);
        } else {
            const filtered = data?.skills?.filter((skill) => skill?.category === category);
            setFilteredSkills(filtered);
        }
    };

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredSkills(data?.skills || []);
        } else {
            setFilteredSkills(data?.skills?.filter((skill) => skill.category === selectedCategory));
        }
    }, [selectedCategory, data]);

    return (
        <>

            <section id="skills" className=" py-5 container
px-sm-5  blur-background-about mt-presentation">
                <div className="ms-4 ">
                    <h1 onClick={() => { console.log(filteredSkills?.length) }} className="display-3 mb-5 ms-4 pt-5 text-white">{language === 'es' ? `${spanish?.skills?.title}` : `${english?.skills?.title}`}</h1>
                    <select className="mb-5 ms-4 mb-4" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="All">All</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Database">Database</option>
                        <option value="Design">Design</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="center  mb-5">

                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        autoplay={{ delay: 3000 }}
                        centeredSlides={filteredSkills?.length < 3}
                        breakpoints={{
                            1: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1000: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {filteredSkills?.map((skill) => (
                            <SwiperSlide className="card-skills" key={skill?.name}>
                                <CardSkills
                                    name={skill?.name}
                                    image={skill?.image}
                                    category={skill?.category}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </section>
        </>
    )
}

export default Skills;