import React from "react";

const CardSkills = ({ name, image, category }) => {
    const urlImage = `img/${image}`;
    return (
        <>
            <div className="mx-5 card-skills">

                    
                    <div className="cover"></div>
                    <div className="user">
                        <img
                            className="img-circle"
                            src={urlImage}
                        />
                    </div>
                    <div className="content">
                        <div className="title text-center">{name}</div>
                    </div>

            </div>
        </>
    );
};

export default CardSkills;