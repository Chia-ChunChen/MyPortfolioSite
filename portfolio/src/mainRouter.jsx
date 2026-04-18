import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Layout from "./components/Layout.jsx";
import Services from "./components/Services.jsx";
import NotFound from "./components/NotFound.jsx";

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

import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import PrivateRoute from "./components/auth/PrivateRoute";

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <main className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/users/signin" element={<Signin />} />
          <Route path="/users/signup" element={<Signup />} />

          <Route
            path="/projects/list"
            element={
              <PrivateRoute>
                <ListProject />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/add"
            element={
              <PrivateRoute>
                <AddProject />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/edit/:id"
            element={
              <PrivateRoute>
                <EditProject />
              </PrivateRoute>
            }
          />

          <Route
            path="/services/list"
            element={
              <PrivateRoute>
                <ListService />
              </PrivateRoute>
            }
          />
          <Route
            path="/services/add"
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            }
          />
          <Route
            path="/services/edit/:id"
            element={
              <PrivateRoute>
                <EditService />
              </PrivateRoute>
            }
          />

          <Route
            path="/references/list"
            element={
              <PrivateRoute>
                <ListReference />
              </PrivateRoute>
            }
          />
          <Route
            path="/references/add"
            element={
              <PrivateRoute>
                <AddReference />
              </PrivateRoute>
            }
          />
          <Route
            path="/references/edit/:id"
            element={
              <PrivateRoute>
                <EditReference />
              </PrivateRoute>
            }
          />

          <Route
            path="/users/list"
            element={
              <PrivateRoute>
                <ListUser />
              </PrivateRoute>
            }
          />
          <Route
            path="/users/add"
            element={
              <PrivateRoute>
                <AddUser />
              </PrivateRoute>
            }
          />
          <Route
            path="/users/edit/:id"
            element={
              <PrivateRoute>
                <EditUser />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainRouter;