import { Routes, Route } from "react-router-dom";
import React from "react";
import NotFound from "./publicRoutes/404";

import "./App.css";

import Admin from "./protectedRoutes/Admin";
import LandingPage from "./protectedRoutes/LandingPage";
import Dashboard from "./protectedRoutes/Dashboard";
import About from "./protectedRoutes/About";

import Header from "./components/Header";
import Footer from "./components/Footer";

/*
Home
Explore
Create
User Profile
LandingPage
*/

const createRoutesWithRole = (role) => {
  if (role === "admin") {
    return (
      <Routes>
        <Route exact path="/" element={<Admin />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  if (role === "enterprise") {
    return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }

  if (role === "user") {
    return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }
};

function App() {
  return <div>{createRoutesWithRole("enterprise")}</div>;
}

const Layout = ({ children }) => {
  return (
    <div data-theme="hayli">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default App;
