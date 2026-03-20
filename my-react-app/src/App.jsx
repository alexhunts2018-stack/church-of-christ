import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import About from "./pages/about";
import Videos from "./pages/Videos";
import Root from "./components/root";
import "./styles/styles.css";
import Links from "./pages/links";
import Visit from "./pages/visit";
import Resources from "./pages/resources";
import Lessons from "./pages/lessons";
import WhatsOn from "./pages/whats-on";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="videos" element={<Videos />} />
      <Route path="links" element={<Links />} />
      <Route path="visit" element={<Visit />} />
      <Route path="resources" element={<Resources />} />
      <Route path="lessons" element={<Lessons />} />
      <Route path="whatson" element={<WhatsOn />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}