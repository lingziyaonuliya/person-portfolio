"use client"

import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "项目介绍11",
    image: "/project/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "项目介绍22",
    image: "/project/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "项目介绍33",
    image: "/project/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id:4,
    title: "E-commerce Application",
    description: "项目介绍44",
    image: "/project/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id:5,
    title: "Application",
    description: "项目介绍54",
    image: "/project/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const variants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  }
  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => (
    project.tag.includes(tag)
  ))

  return (
    <section id="projects">
      <h2 className="text-white text-4xl font-semibold text-center mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
          name="All"
          onClick={handleTagChange}
          isSelected={tag === 'All'}
       />
       <ProjectTag 
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === 'Web'}
       />
       <ProjectTag 
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === 'Mobile'}
       />
      </div>
      
      <ul  ref={ref} className="grid md:grid-cols-3 md:gap-12 gap-8 ">
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index = 0.4}}
          >
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              imgUrl={project.image}
              tags={project.tags}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
          
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection