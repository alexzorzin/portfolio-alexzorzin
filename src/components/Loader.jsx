import React from "react";

const Loader = () => {
    
    setTimeout(() => {
        if (typeof window !== "undefined") {
            const contenedor = document.getElementById('loader');
            contenedor.style.visibility = "hidden";
        }
    }, 2300);

    return (
        <>
            <div id="loader" className="d-flex justify-content-center">
                <div className="loader">
                    {/* <h1>&lt; Z O R Z I N / &gt;</h1> */}
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default Loader;