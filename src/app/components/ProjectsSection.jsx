"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "App Home Screen",
    description: "Project 1 description",
    image: "/images/projects/1.jpg",
    tag: ["Бүгд", "Үсэг сурж байга хэсэг"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Үсгийн хэсэг",
    description: "Project 2 description",
    image: "/images/projects/2.jpg",
    tag: ["Бүгд", "Үсэг сурж байга хэсэг"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Үсэг хэсэг",
    description: "Project 3 description",
    image: "/images/projects/3.jpg",
    tag: ["Бүгд", "Үсэг сурж байга хэсэг"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Үсэг нь дээр дараад харагдах хэсэг",
    description: "Project 4 description",
    image: "/images/projects/4.jpg",
    tag: ["Бүгд", "Тоглоом тоголж байгаа хэсэг"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Амьтан нэр болон дуу чимээгээр таньж байгаа хэсэг",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.jpg",
    tag: ["Бүгд", "Үсэг сурж байга хэсэг"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Тоглоом болон асуулт хариултын хэсэг",
    description: "Project 5 description",
    image: "/images/projects/6.jpg",
    tag: ["Бүгд", "Үсэг сурж байга хэсэг"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Бүгд");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
       Төслийн танилцуулга 
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Бүгд"
          isSelected={tag === "Бүгд"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Үсэг сурж байга хэсэг"
          isSelected={tag === "Үсэг сурж байга хэсэг"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Тоглоом тоголж байгаа хэсэг"
          isSelected={tag === "Тоглоом тоголж байгаа хэсэг"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
