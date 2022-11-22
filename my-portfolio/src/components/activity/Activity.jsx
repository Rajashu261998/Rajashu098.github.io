import { Center, HStack, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Graph from "./Graph";

const Activity = () => {
  return (
    <section id='activity'>
      <Center h={"full"}>
        <VStack
        //  mt={8}
        >
          <Graph />
          <HStack
            align={"center"}
            justify={"center"}
            flexDirection={["column", "row"]}
          >
            <Link isExternal href='https://github.com/Rajashu261998'>
              <Image
                // loading='lazy'
                align='center'
                width='100%'
                h={"150px"}
                src='https://streak-stats.demolab.com?user=rajashu261998&theme=dark'
              />
            </Link>
            <Link isExternal href='https://github.com/Rajashu261998'>
              <Image
                // loading='lazy'
                h={"150px"}
                align='center'
                width='100%'
                src='https://github-readme-stats.vercel.app/api/top-langs/?username=rajashu261998&layout=compact&langs_count=5&theme=dark'
              />
            </Link>
          </HStack>
          <GitHubCalendar username='rajashu261998'>
            <ReactTooltip html />
          </GitHubCalendar>
        </VStack>
      </Center>
    </section>
  );
};

export default Activity;
