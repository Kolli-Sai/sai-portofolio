/* eslint-disable no-unused-vars */
import { Input } from "../../components/ui/input";
import {
  TypographyDestructive,
  TypographyH1,
  TypographyH2,
  TypographyMuted,
  TypographyP,
} from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useToast } from "../../components/ui/use-toast";
import { Toaster } from "../../components/ui/toaster";
import { motion } from "framer-motion";

import { Api } from "../../API";
import { CgSpinner } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Separator } from "../../components/ui/separator";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const ContactPage = () => {
  // ... (rest of the code)
  const { toast } = useToast();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
  });
  const { errors, isDirty, isValid, isSubmitSuccessful, isSubmitting } =
    formState;
  const [isLoading, setIsLoading] = React.useState(false);
  const onSubmit = (data) => {
    console.log("sending email", data);
    setIsLoading(true);
    Api.post("/send-email", data)
      .then((res) => {
        setIsLoading(false);
        toast({
          title: "Message sent",
          description: "Thank you for contacting me",
        });
      })

      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast({
          title: "Message not sent",
          description: "Please try again",
        });
      });
  };

  const onError = (error) => {
    console.log(error);
    toast({
      title: "Message not sent",
      description: "Please try again",
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      // console.log("success");
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <motion.div
      className="container mt-20 box-border py-20"
      initial={{ x: "-100%" }} // Set initial x position to "-100%" for slide-in animation
      animate={{ x: 0 }} // Set animate x position to 0 for slide-in animation
      exit={{ x: "-100%", transition: { ease: "linear" } }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div // Wrap the form with motion.div for slide-in animation
          className="mb-10"
          initial={{ opacity: 0 }} // Set initial opacity to 0 for the staggered animation
          animate={{ opacity: 1 }} // Set animate opacity to 1 for the staggered animation
          transition={{ duration: 0.6, delay: 0.3 }} // Add a delay of 0.3 seconds for staggered animation
        >
          <img src={"/contact-us-primary.svg"} alt="" />
        </motion.div>
        <motion.div // Wrap the form with motion.div for slide-in animation
          initial={{ opacity: 0, x: 100 }} // Set initial opacity and x position for staggered animation
          animate={{ opacity: 1, x: 0 }} // Set animate opacity and x position for staggered animation
          transition={{ duration: 0.6, delay: 0.3 }} // Add a delay of 0.3 seconds for staggered animation
        >
          <div className="flex justify-center mb-10">
            <TypographyH2>Get in touch</TypographyH2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="flex container flex-col gap-4 justify-center caret-primary"
          >
            <motion.div // Wrap each form element with motion.div for staggered animation
              initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
              animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
              transition={{ duration: 0.4 }} // Duration for staggered animation
            >
              <Input type="text" placeholder="Name" {...register("name")} />
              <TypographyDestructive className="text-red-500">
                {errors.name?.message}
              </TypographyDestructive>
            </motion.div>
            <motion.div // Wrap each form element with motion.div for staggered animation
              initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
              animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
              transition={{ duration: 0.4, delay: 0.1 }} // Add a delay for the staggered animation
            >
              <Input type="email" placeholder="Email" {...register("email")} />
              <TypographyDestructive className="text-red-500">
                {errors.email?.message}
              </TypographyDestructive>
            </motion.div>
            <motion.div // Wrap each form element with motion.div for staggered animation
              initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
              animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
              transition={{ duration: 0.4, delay: 0.2 }} // Add a delay for the staggered animation
            >
              <Textarea placeholder="Message" {...register("message")} />
              <TypographyDestructive className="text-red-500">
                {errors.message?.message}
              </TypographyDestructive>
            </motion.div>
            <motion.div // Wrap the submit button with motion.div for staggered animation
              initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
              animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
              transition={{ duration: 0.4, delay: 0.3 }} // Add a delay for the staggered animation
            >
              <div className="flex justify-start">
                {isLoading ? (
                  <Button disabled>
                    <CgSpinner className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    disabled={!isDirty || !isValid || isSubmitting}
                    type="submit"
                    className=" disabled:cursor-not-allowed"
                  >
                    Send
                  </Button>
                )}
              </div>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <Toaster className="bg-green-500" />
      {/* <Separator className="mt-8 text-secondary" /> */}
      <div className=" flex justify-center my-8">
        <TypographyP>Contact</TypographyP>
      </div>
      <div className="flex justify-center space-x-4 flex-wrap mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
          animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
          transition={{ duration: 0.4, delay: 0.5 }} // Add a delay for the staggered animation
        >
          <Link to={"https://www.facebook.com/k.sai.140193?mibextid=ZbWKwL"}>
            <FaFacebookSquare className="text-xl text-inherit  hover:text-accent  mr-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
          animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
          transition={{ duration: 0.4, delay: 0.6 }} // Add a delay for the staggered animation
        >
          <Link to={"https://www.linkedin.com/in/kolli-sai-676772233"}>
            <AiFillLinkedin className="text-xl text-inherit  hover:text-accent  mr-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
          animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
          transition={{ duration: 0.4, delay: 0.7 }} // Add a delay for the staggered animation
        >
          <Link to={"https://github.com/Kolli-Sai"}>
            <BsGithub className="text-xl text-inherit  hover:text-accent  mr-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} // Set initial opacity and y position for staggered animation
          animate={{ opacity: 1, y: 0 }} // Set animate opacity and y position for staggered animation
          transition={{ duration: 0.4, delay: 0.8 }} // Add a delay for the staggered animation
        >
          <Link to={"https://www.instagram.com/sai___kolli/?next=%2F"}>
            <SiInstagram className="text-xl text-inherit hover:text-accent   mr-2" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
