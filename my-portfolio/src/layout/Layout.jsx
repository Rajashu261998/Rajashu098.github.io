import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import About from "../components/About";
import Activity from "../components/activity/Activity";
import Contact from "../components/Contact";
import HeaderNav from "../components/HeaderNav";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const Layout = () => {
  return (
    <div>
      <VStack
        w='full'
        h='100vh'
        display={"block"}
        overflowY='scroll'
        scrollSnapType='y mandatory'
        // position='relative'
        // zIndex='docked'
      >
        <HeaderNav />
        <About />
        <Skills />
        <Projects />
        <Activity />
        <Contact />
        {/* <Box
          rounded='md'
          shadow='lg'
          h={"100vh"}
          scrollSnapAlign='center'
          maxWidth='initial'
        >
          <About />
        </Box>
        <Box
          rounded='md'
          shadow='lg'
          h={"100vh"}
          scrollSnapAlign='center'
          maxWidth='initial'
        >
          <Contact />
        </Box>
        <Box
          rounded='md'
          shadow='lg'
          h={"100vh"}
          scrollSnapAlign='center'
          maxWidth='initial'
        >
          <Projects />
        </Box>
        <Box
          rounded='md'
          shadow='lg'
          h={"100vh"}
          scrollSnapAlign='center'
          maxWidth='initial'
        >
          <Skills />
        </Box> */}
      </VStack>
    </div>
  );
};

export default Layout;
