import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { heyMotion } from "../styles/animation";

const Emoji = () => {
  return (
    <Box as={motion.div} animation={heyMotion}>
      👋
    </Box>
  );
};

export default Emoji;
