import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Layout from './components/Layout.jsx'
import Services from './components/Services.jsx'
import NotFound from './components/NotFound.jsx'
import AddProject from "./components/projects/AddProject";
import EditProject from "./components/projects/EditProject";
import ListProject from "./components/projects/ListProject";
import AddService from "./components/services/AddService";
import EditService from "./components/services/EditService";
import ListService from "./components/services/ListService";
import AddReference from "./components/references/AddReference";
import EditReference from "./components/references/EditReference";
import ListReference from "./components/references/ListReference";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ListUser from "./components/users/ListUser";

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
                <Route path="/projects/list" element={<ListProject />} />
                <Route path="/projects/add" element={<AddProject />} />
                <Route path="/projects/edit/:id" element={<EditProject />} />
                <Route path="/services/list" element={<ListService />} />
                <Route path="/services/add" element={<AddService />} />
                <Route path="/services/edit/:id" element={<EditService />} />
                <Route path="/references/list" element={<ListReference />} />
                <Route path="/references/add" element={<AddReference />} />
                <Route path="/references/edit/:id" element={<EditReference />} />
                <Route path="/users/list" element={<ListUser />} />
                <Route path="/users/add" element={<AddUser />} />
                <Route path="/users/edit/:id" element={<EditUser />} />

            </Routes>
        </main>
        </div>
    )
}
export default MainRouter