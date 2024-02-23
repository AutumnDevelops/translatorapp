import React from 'react'
import Main from "./Main";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
<main>
<BrowserRouter>
        <Routes>
          <Route path="/translatorapp/" element={<Home />} />
          <Route path="/translatorapp/main" element={<Main />} />
        </Routes>
    </BrowserRouter>
</main>
  )
}

export default App