import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Fade,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "./container";
import Emoji from "./Emoji";

const About = () => {
  return (
    <section id='about'>
      <Center h={"full"}>
        <Flex
          // mt={"16"}
          align={"center"}
          gap={"4"}
          direction={["column", "column", "row"]}
        >
          <Avatar
            size={"2xl"}
            src={"https://avatars.githubusercontent.com/u/101584722?s=400&u=f6b25d4de9104d359db459cd10e9b8644ae83c80&v=4"}
          />
          <Container boxShadow={"xl"} p='6' rounded='md'>
            <Heading
              py={4}
              display={"flex"}
              alignItems={"center"}
              size='lg'
              gap={"2"}
            >
              <Emoji />
              <Flex wrap={"wrap"}>
                <Text
                  bgGradient='linear(to-l, #fc679e, #0669b3)'
                  bgClip='text'
                  fontSize={["lg", "xl", "2xl"]}
                  fontWeight='extrabold'
                >
                  Hello____
                </Text>
                <Text
                  align={"left"}
                  fontSize={["md", "lg", "xl", "2xl"]}
                  fontWeight='bold'
                >
                  I'm Ashutosh Raj
                </Text>
              </Flex>
            </Heading>

            <VStack align={"flex-start"}>
              <Text align='left' fontSize={["sm", "md", "lg"]}>
                Aspiring full stack developer from INDIA 🇮🇳 with a
                specialization in MERN stack.
                <br />
                <br />I like to solve problems and make user-centric products,
                Looking forward to honing my skills in a challenging work
                environment.
              </Text>
              <ButtonGroup pt={3} isAttached={true} borderRadius={"md"}>
                <Link
                  href='https://drive.google.com/file/d/1yhzIlngomfzZ85UweMeiBjHzRm9T9Wch/view?usp=sharing'
                  target={"_blank"}
                  _hover={{
                    textDecor: "none",
                  }}
                >
                  <Button
                    bg={"green.300"}
                    transitionDuration='0.5s'
                    _hover={{
                      shadow: "md",
                      textDecoration: "none",
                      transform: "translateY(-5px)",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "ease-in-out",
                    }}
                  >
                    Resume
                  </Button>
                </Link>
                <HStack pl={"4"} gap={2}>
                  <Link
                    href={"https://github.com/Rajashu261998"}
                    isExternal
                    transitionDuration='0.5s'
                    _hover={{
                      shadow: "md",
                      transform: "translateY(-5px)",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "ease-in-out",
                    }}
                  >
                    <FaGithub size={"28px"} />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/ashu1997/"}
                    isExternal
                    color={"linkedin.900"}
                    transitionDuration='0.5s'
                    _hover={{
                      shadow: "md",
                      transform: "translateY(-5px)",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "ease-in-out",
                    }}
                  >
                    <FaLinkedin size={"28px"} />
                  </Link>
                </HStack>
              </ButtonGroup>
            </VStack>
          </Container>
        </Flex>
      </Center>
    </section>
  );
};

export default About;
