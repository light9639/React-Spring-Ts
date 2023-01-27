import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Auto from "@router/Auto/Auto";
import Scroll from "@router/Scroll/Scroll";
import ParallaxPage from "@router/Parallax/Parallax";
import Card from "@router/Card/Card";
import SvgFilter from "@router/SvgFilter/SvgFilter";
import Slider from "@router/Slider/Slider";
import Flip from "@router/Flip/Flip";
import KeyFrames from "@router/KeyFrames/KeyFrames";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Auto />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/SvgFilter" element={<SvgFilter />} />
        <Route path="/Flip" element={<Flip />} />
        <Route path="/KeyFrames" element={<KeyFrames />} />
        <Route path="/Scroll" element={<Scroll />} />
        <Route path="/Parallax" element={<ParallaxPage />} />
      </Routes>
    </React.Fragment>
  )
}