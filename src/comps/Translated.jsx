import React, { useState } from 'react';
import languages_data from "../json/languages_data";
import { FaClipboard } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

const Input = ({translatedText, toLanguage, setToLanguage}) => {
    const handleLanguageChange = (e) => {
      const selectedLanguage = e.target.value;
      setToLanguage(selectedLanguage);
    };
  const handleCopyClick = async () => {
      try{await navigator.clipboard.writeText(translatedText)}
      catch (err) {
          console.error(
              "Unable to copy to clipboard.", err
          );
          }};
      const handleInputSoundClick = () => {
            const utterance = new SpeechSynthesisUtterance(translatedText);
            utterance.lang = toLanguage;
            speechSynthesis.speak(utterance);
        }; 
    return (
      <section id="input_area" className="region">
        <div id="input_overhead" className="overhead">
          <div className="icons">
            <div id="input_sound" className="overhead_icons">
              <i className="sound" id="headphones_icon" onClick = {handleInputSoundClick}><FaHeadphones /></i>
            </div>
            <div id="input_copy" className="overhead_icons">
              <i className="copy" onClick={handleCopyClick}><FaClipboard /></i>
            </div>
          </div>
          <select value={toLanguage} onChange={handleLanguageChange}>
                <option value="es">Spanish</option>
                {languages_data.map((language, index) => {
                    if (language.code !== "es") {
                        return(<option key={index} value={language.code}>
                                {language.language}
                            </option>);
                    }
                    return null; 
                })}
                </select>
        </div>
        <textarea id="input" placeholder="Translated Text" value={translatedText} readOnly></textarea>
      </section>
    );
  };
  
  export default Input;
  
