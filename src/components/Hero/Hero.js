import Head from "next/head";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"} px={{ lg: "4rem", md: "1.5rem", sm: "1rem" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          minH={"80vh"}
        >
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 34 }}
          >
            <Heading
              as={"h1"}
              fontWeight={800}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              letterSpacing={"-2px"}
            >
              <Text
                as={"span"}
                color={"blue.500"}
                fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
              >
                MockLand{" "}
              </Text>
              Free fake API for testing .
            </Heading>
            <Text color={"gray.500"} fontSize={"xl"}>
              If you ever wonder how to test your frontend application without a
              real API, MockLand is the answer. Simply use our mock APIs to test
              your applications and see how it works
            </Text>
            <Stack
              direction={"row"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Link href="/mocks">
                <Button
                  colorScheme={"blue"}
                  bg={"blue.500"}
                  rounded={"5px"}
                  paddingInline={"45px"}
                  py={7}
                  _hover={{
                    bg: "blue.600",
                  }}
                >
                  Get Started
                </Button>
              </Link>
              <Link href="https://github.com/PersiaJS/mockland.dev">
                <Button
                  target="_blank"
                  colorScheme={"green"}
                  rounded={"5px"}
                  paddingInline={"45px"}
                  py={7}
                  rightIcon={<ArrowForwardIcon />}
                >
                  GitHub
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
