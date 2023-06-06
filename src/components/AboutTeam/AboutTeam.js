import { Center, Heading, Flex, Container } from "@chakra-ui/react";

import UserCard from "../UserCard/UserCard";

export default function AboutTeam() {
  return (
    <Container as={"flex"} maxWidth={"100%"} justifyContent={"center"}>
      <Center>
        <Heading mb={"100px"} fontSize={"4xl"}>
          About Team
        </Heading>
      </Center>

      <Flex mx={"auto"} gap={"50px"} justifyContent={"center"} wrap={"wrap"}>
        <UserCard
          name="Ehsan Gazar"
          image="gazar.jpg"
          text="Passionate about web development and programming, feel free to contact me."
          linkedin="https://www.linkedin.com/in/gazar/"
          github="https://github.com/ehsangazar"
        />
        <UserCard
          name="Maral Najafi"
          text="Let's bring ideas to life, and create engaging user experiences."
          linkedin="https://www.linkedin.com/in/maral-najafi/"
          github="https://github.com/maralnajafi"
        />
        <UserCard
          name="Mohammad Baqer Kohie"
          text="Versatility at its finest - I thrive on diverse projects!"
          linkedin="https://www.linkedin.com/in/mbkProgrammer/"
          github="https://github.com/mbkProgrammer/"
        />
        <UserCard
          name="Ali Mohamadi"
          image="Alimh.jpg"
          text="I like to create new things and programming helps me to do that"
          linkedin="https://www.linkedin.com/in/alimh17/"
          github="https://github.com/alimh17/"
        />
      </Flex>
    </Container>
  );
}
