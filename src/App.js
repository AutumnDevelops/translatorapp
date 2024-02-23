import Input from './comps/Input';
import Translated from './comps/Translated';
import axios from 'axios';
import React, { useState } from 'react';
function App() {
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("es");
  const translateText = (text) => {
    axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
      .then(response => { 
        setTranslatedText(response.data.matches[0].translation);
      })
      .catch(error => {
        console.error('Error fetching translation:', error);
      });
  };
  const handleSwitchLanguages = () => {
    const temp = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(temp);
};
  
  return (
    <main>
      <Input  onTranslate={translateText} fromLanguage={fromLanguage} setFromLanguage={setFromLanguage} handleSwitchLanguages={handleSwitchLanguages} />
      <Translated translatedText={translatedText} toLanguage={toLanguage} setToLanguage={setToLanguage} />
    </main>
  );
}

export default App;
