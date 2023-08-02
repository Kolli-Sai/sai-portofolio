import { TypographyH3 } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projectsData = [
  {
    name: "Employee Management App",
    description:
      "A full-stack web application that allows users to manage employees. Users can add, edit, and delete employees. The app also allows users to filter employees by name, email, and phone number.",
    source_link:
      "https://github.com/abhi7068/hashinsert-employee-management-app",
    demo_link: "https://employee-management-app-je5w.onrender.com",
    image: "/team.svg",
  },
  {
    name: "Password Vault",
    description:
      "A full-stack web application that allows users to manage employees. Users can add, edit, and delete employees. The app also allows users to filter employees by name, email, and phone number.",
    source_link: "https://github.com/Kolli-Sai/password_vault",
    demo_link: "https://wondrous-beignet-6c8752.netlify.app/",
    image: "/password.svg",
  },
  {
    name: "Url Shortener",
    description:
      "A full-stack web application that allows users to manage employees. Users can add, edit, and delete employees. The app also allows users to filter employees by name, email, and phone number.",
    source_link:
      "https://github.com/hash-insert/url-shortener/tree/Yeswanth-Sai",
    demo_link: "https://url-shortener-rp1j.onrender.com/",
    image: "/url.svg",
  },
  {
    name: "Hash Market Backend",
    description:
      "A full-stack web application that allows users to manage employees. Users can add, edit, and delete employees. The app also allows users to filter employees by name, email, and phone number.",
    source_link:
      "https://github.com/hash-insert/checkpoint-hash-markt-backend/tree/Yashwanth-Sai",
    demo_link: "",
    image: "/shopping.svg",
  },
];

const ProjectsPage = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Add a delay of 0.5 seconds before the staggered animations start
        staggerChildren: 0.2, // Adjust the delay between each project card animation
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
      initial="hidden" // Set initial to "hidden" for staggered animations
      animate="visible" // Set animate to "visible" for staggered animations
      variants={containerVariants} // Apply staggered animations to project cards
      exit={{ x: "-100%", transition: { ease: "linear" } }}
    >
      <div className="mb-6">
        <TypographyH3>Projects</TypographyH3>
      </div>
      <motion.div // Wrap the project cards in another motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projectsData.map((project, index) => (
          <motion.div // Wrap each project card with motion.div and use the childVariants
            key={index}
            className="bg-card rounded-lg p-6   border-foreground border-2 shadow-md transition-all duration-300 hover:border-border hover:shadow-lg hover:border-2 hover:text-border"
            initial="hidden" // Set initial to "hidden" for the staggered animations of project cards
            animate="visible" // Set animate to "visible" for the staggered animations of project cards
            variants={childVariants} // Apply animations to individual project cards
            transition={{ delay: index * 0.2 }} // Apply a delay for each card based on its index in the projectsData array
          >
            <div className="text-xl font-bold hover:text-indigo-600 mb-6">
              {project.name}
            </div>
            {/* <TypographyH3 className="mb-4">{project.name}</TypographyH3> */}
            <img
              src={project.image}
              alt={project.name}
              className="h-40 w-full object-contain rounded-md mb-4"
            />
            <div className="flex justify-between">
              <Button
                variant="outline"
                className="w-1/2 mr-2 p-2 cursor-pointer"
              >
                <Link to={project.source_link}>Source Code</Link>
              </Button>
              <Button
                // variant="primary"
                className="w-1/2 ml-2 p-2 cursor-pointer"
              >
                <Link to={project.demo_link}>Live Demo</Link>
                {/* Live Demo */}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
