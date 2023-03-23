import React from "react";
import { useApiContext } from "../context/Context";

const LanguageSelector = () => {
  const { language, setLanguage } = useApiContext();
  function languages(lang) {
    setLanguage(lang);
    document.getElementById('language').style.display = "none";
    localStorage.setItem('lang', JSON.stringify(lang));
  }

  return (
    <>
      {
        language?.length === 0 &&
        <section id="language" class="masthead text-center text-white">
          <div class="masthead-content col-12">
            <div >
              <h1>Seleccione el idioma</h1>
              <h1>Select language</h1>
              <div>
                <button id="en" onClick={() => languages('en')} class="custom-btn btn-16 rounded">English</button>
                <button id="es" onClick={() => languages('es')} class="custom-btn btn-16 rounded">Español</button>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
}

export default LanguageSelector;