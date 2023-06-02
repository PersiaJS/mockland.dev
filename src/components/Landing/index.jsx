import { useRouter } from "next/router";

import { Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import Conditions from "./Illustrations/Conditions";
import Privacy from "./Illustrations/Privacy";

const Landing = ({ head, text }) => {
  const { pathname } = useRouter();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={5}
      flexWrap={{ base: "wrap-reverse", md: "nowrap" }}
    >
      <VStack alignItems="left">
        <Text fontSize="sm" color="#3182CE" fontWeight="bold">
          Current as of 2nd June 2023
        </Text>
        <Heading as="h2" textAlign="left">
          {head}
        </Heading>
        <Text textAlign="left">{text}</Text>
      </VStack>
      <VStack>
        {pathname === "/terms-and-conditions" ? <Conditions /> : <Privacy />}
      </VStack>
    </Flex>
  );
};

export default Landing;
