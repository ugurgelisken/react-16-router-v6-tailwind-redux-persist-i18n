import { Routes, Route, Outlet } from "react-router-dom";
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
        <Route index exact path="/" element={<Admin />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  if (role === "enterprise") {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }

  if (role === "user") {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
};

function App() {
  return createRoutesWithRole("enterprise");
}

const Layout = () => {
  return (
    <div data-theme="hayli">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
