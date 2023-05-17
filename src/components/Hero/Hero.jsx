import {
  Box,
  Link,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <Container
        maxW={"3xl"}
        px={{ base: 6, sm: "6" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        minH={"80vh"}
      >
        <Stack as={Box} textAlign={"center"} alignItems={"center"} spacing={8}>
          <Heading
            as={"h1"}
            fontWeight={800}
            color={"blackAlpha.800"}
            fontSize={{ base: "2.25rem", sm: "2.25rem", md: "3rem" }}
            letterSpacing={"tighter"}
          >
            <Text as={"span"} color={"blue.500"}>
              MockLand{" "}
            </Text>
            Free fake API for testing
          </Heading>
          <Text color={"gray.500"} fontSize={"xl"}>
            If you ever wonder how to test your frontend application without a
            real API, MockLand is the answer. Simply use our mock APIs to test
            your applications and see how it works
          </Text>
          <Stack
            direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
            width={"100%"}
            spacing={3}
            justifyContent={{
              base: "stretch",
              sm: "center",
              md: "center",
              lg: "center",
            }}
          >
            <Link as={NextLink} href="/get-started">
              <Button
                width={"100%"}
                colorScheme={"blue"}
                size={"lg"}
                rightIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>
            </Link>

            <Link
              as={NextLink}
              href="https://github.com/PersiaJS/mockland.dev"
              target="_blank"
            >
              <Button width={"100%"} size={"lg"} leftIcon={<FaGithub />}>
                GitHub
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
