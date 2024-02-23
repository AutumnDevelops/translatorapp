import React, {useState, useRef} from 'react';
import { FaClipboard } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import languages_data from "../json/languages_data";
const Input = ({onTranslate, fromLanguage, setFromLanguage, handleSwitchLanguages}) => {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {setText(e.target.value);};
  const handleTranslate = () => {
    if (text.trim() === '') {
        document.getElementById("input").value = "please enter some text to translate";
        return;
        }else{
            onTranslate(text, fromLanguage)
        }   
    };
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setFromLanguage(selectedLanguage);
  };
  const handleCopyClick = async () => {
    try{await navigator.clipboard.writeText(text)}
    catch (err) {
        console.error(
            "Unable to copy to clipboard.", err
        );
        }};
    const handleInputSoundClick = () => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = fromLanguage;
            speechSynthesis.speak(utterance);
        };


  return (
    <>
        <section id = "input_area" className = "region">
            <div id = "input_overhead" className = "overhead">
                <div className = "icons">
                    <div id  = "input_sound" className = "overhead_icons" onClick = {handleInputSoundClick}>
                        <i className="sound" id = "headphones_icon"><FaHeadphones /></i>
                    </div>
                    <div id  = "input_copy" className = "overhead_icons" onClick={handleCopyClick}>
                        <i className="copy"><FaClipboard /></i>
                    </div>
                </div>
                <select value={fromLanguage} onChange={handleLanguageChange}>
                <option value="en">English</option>
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
                <textarea id = "input" value={text} onChange={handleTextChange} placeholder="User Input" />
        </section>
        <div id = "switches">
            <div id  = "switch_languages" onClick={handleSwitchLanguages}>
            <FaRepeat />
            </div>
            <div id = "button" onClick={handleTranslate}>
                 <h3>Translate</h3>
            </div>
        </div>
    </>
  )
}

export default Input