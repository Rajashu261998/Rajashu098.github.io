import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaExternalLinkAlt, FaGithub, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import { projects } from "../../data/data";
import ProjectsCard from "./ProjectsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  const settings = {
    // dots: true,
    arrows: false,
    // fade: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // const image = `https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80`;
  // const image2 = `https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60`;
  return (
    <section id='projects'>
      <Center h={"full"}>
        <Box position={"relative"} w={"4xl"} overflow={"hidden"}>
          <VStack>
            <Heading>Projects</Heading>
            <Text></Text>
          </VStack>
          {/* Project card */}
          {/* Project Cover Image - Project Title - Project Description - Tech Stacks used in the project are highlighted -Two buttons: GitHub, and Deployment/Video -Ensure that the cards are responsive on different screen sizes
          -Project Cards details are visible in the first go, need not on them to view them." 
          */}
          <Slider {...settings}>
            {projects.map((project, id) => (
              <ProjectsCard key={id} {...project} />
            ))}
          </Slider>
        </Box>
      </Center>
    </section>
  );
};

export default Projects;
