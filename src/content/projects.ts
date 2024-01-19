import yelpCamp from "/public/projects/yelp-camp.webp";
import neuro from "/public/projects/neuro.png";

const gitHub = (name: string) => `https://github.com/tariqs26/${name}`;
const netlify = (name: string) => `https://${name}.netlify.app`;
const vercel = (name: string) => `https://${name}.vercel.app`;

export const projects = [
  {
    name: "YelpCamp",
    desc: "Full-stack web application that allows users to view, post, and leave reviews on campground locations.",
    tech: ["React", "TypeScript", "Node", "Express", "MongoDB"],
    imgSrc: yelpCamp,
    liveLink: netlify("yelpcamp-campgrounds"),
    codeLink: gitHub("yelpcamp-client"),
  },
  {
    name: "Neuro",
    desc: "Trivia app with a time-based scoring system, allowing users to generate questions based on specific topics and difficulty levels.",
    tech: ["React", "Redux", "TypeScript", "Axios"],
    imgSrc: neuro,
    liveLink: netlify("neuro-trivia"),
    codeLink: gitHub("Neuro"),
  },
];

export type Project = (typeof projects)[number];
