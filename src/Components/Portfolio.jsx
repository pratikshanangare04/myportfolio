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
import image from "../images/image.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Certificate => Diploma In Web Design 🎉",
    description:
      "I am currently pursuing a diploma in web design to develop skills in creating responsive and visually engaging websites. My focus is on mastering design principles and modern web technologies to craft user-friendly digital experiences.",
    url: "https://drive.google.com/file/d/1nkgerjsaIqZ64dIiUzItRe8a24NYrdYC/view?usp=drivesdk",
  },
  {
    title: "Movie App React js Project",
    description:
      "This React project uses the TMDB API to display popular, top-rated, and upcoming movies. Users can search for movies by title or ID and view detailed information, including posters, ratings, and cast.",
    url: "https://github.com/pratikshanangare04/Movie-App",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://pratikshanangare04.github.io/resume/",
  },
  {
    title: "Certificate=> Diploma In React Js 🎉",
    description:
      "I am pursuing a diploma in React.js to master building dynamic and interactive web applications with modern development practices.",
    url: "https://drive.google.com/file/d/1nfCcKAe945q0c_ANU_g4qZp_46sOu3A_/view?usp=drivesdk",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
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
