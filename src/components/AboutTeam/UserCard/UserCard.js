import { Box, Center, Text, Stack, Flex, Img, Avatar } from "@chakra-ui/react";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function UserCard({ name, image, text, linkedin, github }) {
  return (
    <Center w={"300px"}>
      <Flex
        role={"group"}
        w={"full"}
        rounded={"lg"}
        height={"100%"}
        flexDirection={"column"}
        gap={3}
        justifyContent={"space-between"}
        boxShadow={
          "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"
        }
        padding={4}
      >
        <Flex
          rounded="full"
          w={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={2}
        >
          <Avatar
            size={"2xl"}
            name={name}
            src={`/team/${image}`}
            _groupHover={{
              transform: "translateY(-8px)",
            }}
            transition={"all 0.3s ease-in-out"}
          />
          <Stack align={"center"}>
            <Text
              fontSize={"sm"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              pt={2}
            >
              {name || "Could be you?"}
            </Text>
            <Text color={"gray.400"} textAlign={"center"}>
              {text ||
                "It is open source, so join us and contribute to our code"}
            </Text>
          </Stack>
        </Flex>
        <Flex gap={2} justifyContent={"center"}>
          {github && (
            <Link href={github} target="_blank">
              <FaGithub
                color="var(--chakra-colors-blue-500)"
                fontSize={"1.2rem"}
              />
            </Link>
          )}
          {linkedin && (
            <Link href={linkedin} target="_blank">
              <FaLinkedin
                color="var(--chakra-colors-blue-500)"
                fontSize={"1.2rem"}
              />
            </Link>
          )}
        </Flex>
      </Flex>
    </Center>
  );
}
