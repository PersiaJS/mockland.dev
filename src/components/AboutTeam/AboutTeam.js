import Image from "next/image";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";

import UserCard from "./UserCard/UserCard";

export default function AboutTeam() {
  return (
    <Container as={"flex"} maxWidth={"100%"} justifyContent={"center"}>
      <Center pb={8}>
        {" "}
        <Heading fontSize={"4xl"}>About Team</Heading>
      </Center>

      <Flex
        mx={"auto"}
        gap={"50px"}
        justifyContent={"center"}
        wrap={"wrap"}
        maxW={"700px"}
      >
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Flex>
    </Container>
  );
}
