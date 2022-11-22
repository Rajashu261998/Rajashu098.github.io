import {
  Box,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";

const SkillCard = ({ name, image, link, description }) => {
  return (
    <Box transitionDuration='0.5s'>
      <Link
        href={link}
        isExternal
        _hover={{
          textDecoration: "none",
        }}
      >
        <HStack
          p={4}
          bg={useColorModeValue("white", "gray.800")}
          rounded='xl'
          borderWidth='1px'
          borderColor={useColorModeValue("gray.100", "gray.700")}
          w='100%'
          textAlign='left'
          align='start'
          spacing={4}
          // transform='translateY(5px)'
          transitionDuration='0.5s'
          _hover={{
            shadow: "md",
            transform: "translateY(-5px)",
            transitionDuration: "0.5s",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <Box
            rounded='lg'
            p={2}
            position='relative'
            overflow='hidden'
            lineHeight={0}
            boxShadow='inset 0 0 1px 1px rgba(0, 0, 0, 0.015)'
          >
            {/* I'll try to mix this https://www.npmjs.com/package/splashy  */}
            {/* Or this https://www.npmjs.com/package/get-image-colors */}
            {/* <Box
              bg={data.lightVibrant}
              position='absolute'
              top={0}
              bottom={0}
              left={0}
              right={0}
              opacity={0.25}
            ></Box> */}
            <Image
              src={image}
              height={26}
              width={26}
              layout='fixed'
              rounded='md'
            />
          </Box>
          <VStack
            align='start'
            justify='flex-start'
            spacing={1}
            maxW='lg'
            h='100%'
          >
            <VStack spacing={0} align='start' flexGrow='1'>
              <Text fontWeight='bold' fontSize='md' noOfLines={2}>
                {name}
              </Text>
              <Text
                fontSize='sm'
                color={useColorModeValue("gray.500", "gray.200")}
              >
                {description}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Link>
    </Box>
  );
};

export default SkillCard;
