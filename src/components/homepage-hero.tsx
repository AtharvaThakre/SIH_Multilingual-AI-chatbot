"use client";

import * as React from "react";
import SplineScene from "./SplineScene";
import ChatbotWidget from "./chatbot-widget";

export interface HomepageHeroProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function HomepageHero({
  className = "",
  style
}: HomepageHeroProps) {

  return (
    <section
      aria-labelledby="homepage-hero-heading"
      className={`w-full h-screen relative overflow-hidden ${className}`}
      style={style}>

      {/* Full Screen 3D Spline Scene */}
      <div className="absolute inset-0 w-full h-full">
        <SplineScene 
          className="w-full h-full"
          height="100vh"
          width="100vw"
        />
      </div>

      {/* Chatbot Widget */}
      <ChatbotWidget />

    </section>
  );
}
