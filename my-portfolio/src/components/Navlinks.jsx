import { Link } from "@chakra-ui/layout";
import React from "react";

const Navlinks = ({ name, path }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      // _hover={{
      //   textDecoration: "none",
      // }}
      _hover={{
        transform: "translateY(-3px)",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
      }}
      href={path}
      // fontSize={10}
    >
      {name}
    </Link>
  );
};

export default Navlinks;
