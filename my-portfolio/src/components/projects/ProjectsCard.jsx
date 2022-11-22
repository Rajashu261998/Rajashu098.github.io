import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { skills } from "../../data/data";

const ProjectsCard = ({
  name,
  description,
  technology,
  image,
  githubLink,
  deployLink,
}) => {
  //   const skill = skills.filter((el) => el.name == "Javascript")[0];
  //   const skill = skills.filter((el) =>
  //     Object.values(el).includes(...technology)
  //   );
  //   console.log(technology);
  //   //   console.log(Object.values(skill).includes(...technology));
  //   console.log(skill);
  return (
    <Box
      w={"90%"}
      h={"85%"}
      display={"flex"}
      gap={"5"}
      flexDirection={"column"}
      mx={4}
      mt={4}
      mb={10}
      className='box'
      boxShadow={"xl"}
      rounded='md'
      transitionDuration='0.5s'
      _hover={{
        shadow: "md",
        transform: "translateY(-5px)",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <Image
        rounded={"md"}
        src={image}
        fallbackSrc='https://via.placeholder.com/350'
      />
      <VStack justify={"space-between"} h={"100%"} pb={"6"}>
        <Heading fontSize={["md", "lg", "xl", "2xl"]}>{name}</Heading>
        <Text noOfLines={3} px={"4"} fontSize={["sm", "sm", "md", "lg"]}>
          {description}
        </Text>
        <VStack>
          <Heading fontSize={["sm", "md", "lg"]}>Technology Used</Heading>
          <HStack>
            {technology.map((technology, key) => (
              <Text key={key}>{technology}</Text>
            ))}
          </HStack>
        </VStack>
        {/* <Avatar src={skill.image} /> */}
        <ButtonGroup>
          <Link
            href={githubLink}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button colorScheme='gray' leftIcon={<FaGithub />}>
              Github
            </Button>
          </Link>
          <Link
            href={deployLink}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button colorScheme='teal' leftIcon={<FaExternalLinkAlt />}>
              Demo
            </Button>
          </Link>
        </ButtonGroup>
      </VStack>
    </Box>
  );
};

export default ProjectsCard;
