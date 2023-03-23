import React from "react";

const Loader = ({loading}) => {
    
    if (typeof window !== "undefined" && loading === true) {
        const html = document.getElementsByTagName('html')[0];
        html.style.overflow = "hidden";
    } else if(typeof window !== "undefined" && loading === false){
        const html = document.getElementsByTagName('html')[0];
        html.style.overflow = "initial";
    }

    return (
        <> { loading === true ?
            <div id="loader" className="d-flex justify-content-center">
                <div className="loader">
                    {/* <h1>&lt; Z O R Z I N / &gt;</h1> */}
                    <span></span>
                    <span></span>
                </div>
            </div>
            :
            null
            }
        </>
    );
}

export default Loader;