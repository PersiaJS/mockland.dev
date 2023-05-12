import React from "react";
import MocklandLogo from "../MocklandLogo/MocklandLogo";
import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Mockland = () => {
  return (
    <Link href="/" _hover={{ textDecoration: "none" }}>
      <Flex alignItems={"center"} gap={2}>
        <MocklandLogo />
        <Heading
          as="h1"
          fontSize="32px"
          letterSpacing={"tighter"}
          color={"blue.500"}
          fontWeight={"800"}
          display={{ base: "none", md: "block" }}
        >
          MockLand
        </Heading>
      </Flex>
    </Link>
  );
};

export default Mockland;
