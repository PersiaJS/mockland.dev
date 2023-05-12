import { Box, Center, Text, Stack, Flex, Img, Avatar } from "@chakra-ui/react";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function UserCard({ name, image, text, linkedin, github }) {
  return (
    <Center w={"200px"}>
      <Box role={"group"} w={"full"} rounded={"lg"}>
        <Box
          rounded="full"
          w={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Avatar
            size={"2xl"}
            name={name}
            src={`/team/${image}`}
            _groupHover={{
              transform: "translateY(-10px)",
            }}
            transition={"all 0.3s ease-in-out"}
          />
        </Box>
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
            {text || "It is open source, so join us and contribute to our code"}
          </Text>
          <Flex gap={2} p={2}>
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
        </Stack>
      </Box>
    </Center>
  );
}
