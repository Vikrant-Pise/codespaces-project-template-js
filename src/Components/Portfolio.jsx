/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/vicky2.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ola Electric Landing Page 🏍️",
    description:
      "1)Developed a responsive landing page using HTML, CSS, and JavaScript. 2)Integrated a 3D model of the Ola Electric bike from the official Ola website ",
    url: "https://vikrant-pise.github.io/Ola-Electric-Landing-Page---By_Vikrant-Pise/",
  },
  {
    title: "Portfolio 🗂️",
    description:
      "1) Developed a responsive portfolio website using HTML, CSS, and JavaScript. 2) Featuring interactive elements, animations, and optimized performance",
    url: "https://vikrant-pise.github.io/Portfolio-Vikrant_Pise/",
  },
  {
    title: "Lobe Tour Ai Website Clone 🤖",
    description:
      "This project involves creating a clone of the Lobe Tour AI website, focusing on delivering a seamless user experience while showcasing advanced AI-driven travel solutions",
    url: "https://vikrant-pise.github.io/Lobe-Tour-Ai-Clone---By-Vikrant-Pise/",
  },
  {
    title: "Rock Paper Scissors Game 🎮",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://vikrant-pise.github.io/Rock-Paper-scissors-Game/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "41%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
