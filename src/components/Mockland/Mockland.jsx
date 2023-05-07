import React from "react";
import MocklandLogo from "../MocklandLogo/MocklandLogo";
import { Flex, Heading, Link } from "@chakra-ui/react";

const Mockland = () => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <Flex alignItems={"center"} gap={2}>
        <MocklandLogo />
        <Heading
          as="h1"
          fontSize="32px"
          color={"green"}
          display={{ base: "none", md: "block" }}
        >
          Mockland
        </Heading>
      </Flex>
    </Link>
  );
};

export default Mockland;
