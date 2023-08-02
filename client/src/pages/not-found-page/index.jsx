/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "../../components/ui/typography";
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
const NotFoundPage = () => {
  return (
    <motion.section
      className="text-gray-600 body-font"
      initial="hidden" // Set initial to "hidden" for the section animation
      animate="visible" // Set animate to "visible" for the section animation
      variants={containerVariants} // Apply slide-in animation to the section
      exit={{ x: "-100%", transition: { ease: "linear" } }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/404.svg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <TypographyH3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Oops! Page not found.
          </TypographyH3>
          <TypographyP className="mb-8 leading-relaxed">
            You may have mistyped the address or the page may have moved.
          </TypographyP>
          <div className="flex justify-center mt-8">
            <Link to="/">
              <Button>
                <AiFillHome className="mr-2" />
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NotFoundPage;
