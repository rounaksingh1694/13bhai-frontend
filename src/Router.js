import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from "./App";
import { CoursePage } from "./components/courses/CoursePage";
import { HackathonsPage } from "./components/hackathons/HackathonsPage";
import { JobsPage } from "./components/jobs/JobsPage";
import { LandingPage } from "./components/landing/LandingPage";
import CookieApp from "./CookieApp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="hackathons" element={<HackathonsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
