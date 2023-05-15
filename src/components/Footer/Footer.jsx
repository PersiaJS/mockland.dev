import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Flex p={10} bg={"#7289d9"} width={"full"}>
        <Container
          as={"flex"}
          direction={"row"}
          justifyContent={"space-between"}
          maxW={"7xl"}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              alignItems={"center"}
              columnGap={2}
            >
              <FaDiscord fontSize={"60px"} color="white" />
              <Flex direction={"column"} justifyContent={{ base: "center" }}>
                <Text
                  color={"white"}
                  fontSize={"xl"}
                  textAlign={{ base: "center", md: "left", sm: "center" }}
                >
                  Connect with the community
                </Text>
                <Text
                  color={"white"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Feel free to ask questions, report issues, and meet new people
                </Text>
              </Flex>
            </Flex>
            <Box>
              <Link href="https://discord.gg/P3Ht3qjR">
                <Button
                  fontWeight={"bold"}
                  py={7}
                  px={8}
                  alignItems={"center"}
                  mt={{ base: "20px", md: "0px" }}
                >
                  Join #PersiaJS Discord!
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Flex p={10} bg={"blue.600"} width={"full"}>
        <Container
          as={"flex"}
          direction={"row"}
          justifyContent={"space-between"}
          maxW={"7xl"}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              alignItems={"center"}
              columnGap={2}
            >
              <FaTelegram fontSize={"60px"} color="white" />
              <Flex
                direction={"column"}
                justifyContent={{ base: "center", md: "right" }}
              >
                <Text
                  color={"white"}
                  fontSize={"xl"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Connect with the community
                </Text>
                <Text
                  color={"white"}
                  textAlign={{ base: "center", md: "left", sm: "center" }}
                >
                  Feel free to ask questions, report issues, and meet new people
                </Text>
              </Flex>
            </Flex>
            <Box>
              <Link href="https://t.me/persiajs">
                <Button
                  fontWeight={"bold"}
                  py={7}
                  px={8}
                  alignItems={"center"}
                  mt={{ base: "20px" }}
                >
                  Join #PersiaJS Telegram!
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Flex>

      <Container
        as={Stack}
        sx={{
          maxW: "6xl",
          py: 4,
          spacing: 1,
          justify: "center",
          alignItems: "center",
        }}
      >
        <Stack direction={"row"} spacing={6}>
          <Text color={"gray.900"}>Developed by PersiaJS team</Text>
        </Stack>
        <Box>
          <Container
            as={Stack}
            maxW={"6xl"}
            my={1}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Center columnGap={"20px"} p={1}>
              <Link href="https://github.com/PersiaJS/mockland.dev">
                <FaGithub
                  color="var(--chakra-colors-gray-400)"
                  fontSize={"20px"}
                />
              </Link>
              <Link href="https://t.me/persiajs">
                <FaTelegram
                  color="var(--chakra-colors-gray-400)"
                  fontSize={"20px"}
                />
              </Link>
              <Link href="https://discord.gg/P3Ht3qjR">
                <FaDiscord
                  color="var(--chakra-colors-gray-400)"
                  fontSize={"20px"}
                />
              </Link>
            </Center>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
