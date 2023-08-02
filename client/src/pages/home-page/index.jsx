/* eslint-disable react/no-unescaped-entities */
import { Button } from "../../components/ui/button";
import { TypographyH1, TypographyLarge } from "../../components/ui/typography";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
  const navigate = useNavigate();

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
      className="container mt-20 py-20 box-border"
      initial="hidden" // Set initial to "hidden" for the section animation
      animate="visible" // Set animate to "visible" for the section animation
      variants={containerVariants} // Apply slide-in animation to the section
      exit={{ x: "-100%", transition: { ease: "linear" } }}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-y12 gap-x-6">
        <motion.div // Wrap the element with motion.div and use the childVariants
          className="md:order-2"
          variants={childVariants}
        >
          <img src={"/version-control-primary.svg"} alt="programmer" />
        </motion.div>
        <motion.div // Wrap the element with motion.div and use the childVariants
          className="md:order-1 flex flex-col justify-evenly gap-6 mb-10"
          variants={childVariants}
        >
          <TypographyH1>
            Welcome! I'm{" "}
            <span
              className="
            bg-clip-text text-transparent bg-gradient-to-tl from-primary  to-secondary"
            >
              Kolli Sai
            </span>
            ,
          </TypographyH1>
          <TypographyLarge>
            As a full-stack developer, I am consistently learning new web
            technologies. I'm passionate about my work, therefore, I constantly
            strive to learn new skills and advance my frontend and backend
            skills. My objective is to develop effective and innovative web
            applications that continue to challenge the boundaries of what is
            possible in the digital world.
          </TypographyLarge>

          <div className="flex justify-start">
            <motion.div // Wrap the button with motion.div and use the childVariants
              variants={childVariants}
            >
              <Button onClick={() => navigate("/contact")}>
                Get in touch
                <BsArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HomePage;
