import { Image, Link } from "@chakra-ui/react";
import React from "react";

const Graph = () => {
  return (
    <Link isExternal href='https://github.com/rajashu261998'>
      <Image
        w={"xl"}
        // loading='lazy'
        alt='Ashutosh Raj'
        src='https://activity-graph.herokuapp.com/graph?username=rajashu261998&bg_color=0D1117&color=79fe96&line=79fe96&point=FFFFFF&hide_border=true'
      />
    </Link>
  );
};

export default Graph;
