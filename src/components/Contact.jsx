import React, { useState } from 'react';
import { useApiContext } from "../hooks/useContext";
import english from './languages/en/global.json';
import spanish from './languages/es/global.json';
const Contact = () => {
    const { language } = useApiContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    };

    return (

        <section className='pt-4 pb-5 container
        px-sm-5 mb-5 blur-background-about mt-presentation' id='contact'>
            <h1 className="display-3 text-center-768 mb-5 ms-4 ms-sm-5 pt-5 text-white">{language === 'es' ? `${spanish?.contact?.title}` : `${english?.contact?.title}`}</h1>
            <div className='ms-lg-4 row'>
                <form className="form-control blur-background mb-5 p-4 mx-4 mx-lg-0" action="https://formsubmit.co/54826e7e274983ce91fd1e34692ea985" method="POST" >
                    <div className="mb-3">
                        <label htmlFor="name" className="mb-4 mt-3  text-white form-label">
                        {language === 'es' ? `${spanish?.contact?.input1}` : `${english?.contact?.input1}`}
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="mb-4 mt-3  text-white form-label">
                        {language === 'es' ? `${spanish?.contact?.input2}` : `${english?.contact?.input2}`}
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="mb-4 mt-3 text-white form-label">
                        {language === 'es' ? `${spanish?.contact?.input3}` : `${english?.contact?.input3}`}
                        </label>
                        <textarea
                            className=" form-control"
                            id="message"
                            rows="3"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="custom-btn-contact btn-16 btn btn-light btn-sm  container ">
                    {language === 'es' ? `${spanish?.contact?.input4}` : `${english?.contact?.input4}`}
                    </button>
                    <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                </form>
                <div></div>
            </div>
        </section>

    );
};

export default Contact;