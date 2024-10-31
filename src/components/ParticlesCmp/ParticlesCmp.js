import React from 'react';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesCmp = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract", // Attraction mode on hover
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200, // Distance of attraction
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000", // Color of the particles (black)
          },
          links: {
            enable: false, // Disable linking between particles
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
          stroke: {
            width: 1,
            color: "#000000", // Black border for the particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesCmp;
