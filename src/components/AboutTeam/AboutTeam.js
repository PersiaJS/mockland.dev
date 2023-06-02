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
        <UserCard
          name="Hossein Karbakhsh Ravari"
          text="We can help each other to progress in the virtual world."
          linkedin="https://www.linkedin.com/in/hossein-karbakhsh-10a703268/"
          github="https://github.com/Hossein-K-R"
        />
        <UserCard />
      </Flex>
    </Container>
  );
}
