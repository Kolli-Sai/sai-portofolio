import React from "react";
import { TypographyH2, TypographyH3 } from "../../components/ui/typography";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMongoose } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { SiReacthookform } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML5", icon: AiFillHtml5 },
  { name: "CSS3", icon: DiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "React Query", icon: SiReactquery },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: BiLogoMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Git", icon: BiLogoGit },
  { name: "React Hook Form", icon: SiReacthookform },
  { name: "React Router", icon: SiReactrouter },
];

const SkillsPage = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100%", // Slide in from the left
    },
    visible: {
      opacity: 1,
      x: 0, // Slide to its original position
      transition: {
        delay: 0.5, // Add a delay of 0.5 seconds before the section animation starts
        staggerChildren: 0.1, // Adjust the delay between each skill card animation
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8 box-border"
      initial="hidden" // Set initial to "hidden" for the section animation
      animate="visible" // Set animate to "visible" for the section animation
      variants={containerVariants} // Apply slide-in animation to the section
      exit={{ x: "-100%", transition: { ease: "linear" } }}
    >
      <div className="mb-10">
        <TypographyH2>Skills & Technologies</TypographyH2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div // Wrap each skill card with motion.div and use the childVariants
            key={index}
            className="bg-white rounded-lg p-4 border border-gray-200 border-2 shadow-md transition-all duration-300 hover:border-indigo-600 hover:shadow-lg hover:border-2  hover:text-indigo-600"
            variants={childVariants}
            initial="hidden" // Set initial to "hidden" for the staggered animations of skill cards
            animate="visible" // Set animate to "visible" for the staggered animations of skill cards
            transition={{
              delay: index * 0.1, // Apply a delay for each skill card based on its index
              ease: index % 2 === 0 ? "easeIn" : "easeOut", // Use different easing functions for odd and even index skill cards
            }}
          >
            <div className="flex items-center mb-2">
              {React.createElement(skill.icon, {
                className: "text-4xl text-inherit mr-2",
              })}
              <TypographyH3>{skill.name}</TypographyH3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsPage;
