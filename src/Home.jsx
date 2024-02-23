import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <section id = "home_area" class = "region">
        <div id = "home_section">
            <h2>Pocket Translator</h2>
            <Link to = "/translatorapp/main">Translator</Link>
            <a href = "https://autumnfrontend.io/">Portfolio</a>
        </div>
    </section>
  )
}

export default Home