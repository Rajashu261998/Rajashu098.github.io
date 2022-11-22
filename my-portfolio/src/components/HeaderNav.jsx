import { Avatar } from "@chakra-ui/avatar";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, HStack, Link, Stack } from "@chakra-ui/layout";
import React from "react";
import Navlinks from "./Navlinks";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton } from "@chakra-ui/button";
import ToggleColorMode from "../ToggleColorMode";
import { keyframes, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animation } from "../styles/animation";

const links = [
  { name: "About Me", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Activity", path: "#activity" },
  { name: "Contact Me", path: "#contact" },
];

const HeaderNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = useColorMode();
  const colorValue = useColorModeValue("white", "gray.700");
  // console.log(colorValue);

  return (
    <Box
      // as={motion.div}
      // animation={animation}
      pos={"fixed"}
      top={"0"}
      w={"full"}
      zIndex={2}
      px={4}
      boxShadow={"lg"}
      bg={colorValue}
    >
      <Flex
        h={"14"}
        align={"center"}
        justify={"space-between"}
        w={["90%", "85%", "80%"]}
        maxW={900}
        mx='auto'
      >
        <IconButton
          as={motion.div}
          animation={animation}
          size={"md"}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} align={"center"}>
          <Box className='looooo' as={motion.div} animation={animation}>
            <Avatar
              as={Link}
              size={"sm"}
              href={"#about"}
              //   src={UserIcon}
              // src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
              src={"https://avatars.githubusercontent.com/u/101584722?s=400&u=f6b25d4de9104d359db459cd10e9b8644ae83c80&v=4"}
            />
          </Box>

          <HStack
            as={motion.div}
            animation={animation}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            fontSize={["md", "md", "13px", "md"]}
          >
            {links.map((item, index) => (
              <Navlinks key={index} name={item.name} path={item.path} />
            ))}
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                transform: "translateY(-3px)",
                transitionDuration: "0.5s",
                transitionTimingFunction: "ease-in-out",
              }}
              // href='https://drive.google.com/uc?export=download&id=1iY0QDCh_cgXRx1aTk7nKCfipfkjRobRp'
              href="https://drive.google.com/file/d/1yhzIlngomfzZ85UweMeiBjHzRm9T9Wch/view?usp=sharing"
            >
              Resume
            </Link>
          </HStack>
        </HStack>
        <ToggleColorMode />
      </Flex>
      {isOpen && (
        <Box
          pb={4}
          w={["100%", "100%", "80%"]}
          maxW={800}
          display={["inherit", "inherit", "none"]}
        >
          <Stack as={"nav"} spacing={4}>
            {links.map((link, index) => (
              <Navlinks
                index={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default HeaderNav;
