import React, { useEffect, useState } from "react";
import { GiSpiderWeb } from "react-icons/gi";
import { BiDesktop } from "react-icons/bi";
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";

import { skills } from "../../data/data";
import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab) => {
    console.log(skills.filter((skill) => skill.type === tab));
    if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab));
    else setSkillsList(skills);
  };

  return (
    <section id='skills'>
      <Center h={"full"}>
        <VStack>
          <VStack
          // mt={"10"}
          >
            <Heading mt={0}>Skills</Heading>
            <Text
              fontSize={["md", "lg", "xl", "2xl"]}
              // color={useColorModeValue("gray.500", "gray.200")}
              // maxW='lg'
              textAlign='center'
            >
              A list of technologies that I use on a regular basis.
            </Text>
          </VStack>
          <Tabs
            variant='soft-rounded'
            colorScheme='blue'
            align='center'
            w='100%'
          >
            <TabList display='flex' flexWrap='wrap'>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "green.800",
                  bg: "green.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("")}
                _hover={{
                  shadow: "md",
                  transform: "translateY(-5px)",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <HStack spacing={1}>
                  <Icon as={AiTwotoneThunderbolt} weight='fill' />
                  <Text fontSize={["sm", "md", "md", "lg"]}>All</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.500", "gray.500")}
                _selected={{
                  color: useColorModeValue("gray.100", "gray.800"),
                  bg: useColorModeValue("gray.900", "gray.100"),
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("development")}
                _hover={{
                  shadow: "md",
                  transform: "translateY(-5px)",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <HStack spacing={1}>
                  <Icon as={BiDesktop} weight='fill' />
                  <Text fontSize={["sm", "md", "md", "lg"]}>
                    Web Development
                  </Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "green.800",
                  bg: "green.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("design")}
                _hover={{
                  shadow: "md",
                  transform: "translateY(-5px)",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <HStack spacing={1}>
                  <Icon as={GiSpiderWeb} weight='fill' />
                  <Text fontSize={["sm", "md", "md", "lg"]}>Web Design</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("gray.100", "gray.800")}
                color={useColorModeValue("gray.600", "gray.500")}
                _selected={{
                  color: "red.800",
                  bg: "red.100",
                }}
                mr={2}
                mt={2}
                onClick={() => filterSkills("devops")}
                _hover={{
                  shadow: "md",
                  transform: "translateY(-5px)",
                  transitionDuration: "0.5s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <HStack spacing={1}>
                  <Icon as={AiOutlineCloudServer} weight='fill' />
                  <Text fontSize={["sm", "md", "md", "lg"]}>Devops</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabPanels
              my={5}
              minHeight={"45vh"}
              maxHeight={"50vh"}
              overflow='scroll'
              overflowX='hidden'
            >
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      description={tool.description}
                      image={tool.image}
                      platform={"web"}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      description={tool.description}
                      image={tool.image}
                      platform={"web"}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4}>
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      description={tool.description}
                      image={tool.image}
                      platform={"web"}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid
                  columns={[1, 2]}
                  spacing={4}
                  mt={2}
                  className='simple-grid'
                >
                  {skillsList.map((tool, index) => (
                    <SkillCard
                      key={index}
                      name={tool.name}
                      description={tool.description}
                      image={tool.image}
                      platform={"web"}
                      link={tool.link}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </section>
  );
};

export default Skills;
