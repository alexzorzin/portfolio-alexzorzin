import React, { useState, createContext, useContext, useEffect } from "react";
const ApiContext = createContext([]);
export const useApiContext = () => useContext(ApiContext);

const UseContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('');


    useEffect(() => {
        const languageLocalStorage = JSON.parse(localStorage.getItem('lang'));
        languageLocalStorage && setLanguage(languageLocalStorage);
    }, [])

    return (
        <>
            <ApiContext.Provider value={{ language, setLanguage }}>
                {children}
            </ApiContext.Provider>
        </>
    )
}

export default UseContextProvider;