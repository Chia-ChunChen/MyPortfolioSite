import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Layout from './components/Layout.jsx'
import Services from './components/Services.jsx'
import NotFound from './components/NotFound.jsx'

const MainRouter = () => {
    return (
        <div>
        <Layout />
        <main className="container main">
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </main>
        </div>
    )
}
export default MainRouter