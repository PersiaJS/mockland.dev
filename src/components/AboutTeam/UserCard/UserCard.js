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
  Img,
} from "@chakra-ui/react";

import { FaGithub, FaLightbulb, FaLinkedin } from "react-icons/fa";
export default function UserCard() {
  return (
    <Center>
      <Box role={"group"} w={"full"} rounded={"lg"}>
        <Box rounded={"lg"}>
          <Img rounded={"full"} src={"https://via.placeholder.com/150"} />
        </Box>
        <Stack align={"center"}>
          <Text
            fontSize={"sm"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
            pt={2}
          >
            Tom Tom
          </Text>
          <Text color={"gray.400"}>Happy Hacking ✌️</Text>
          <Flex gap={2} p={2}>
            <FaGithub
              color="var(--chakra-colors-blue-500)"
              fontSize={"1.2rem"}
            />
            <FaLinkedin
              color="var(--chakra-colors-blue-500)"
              fontSize={"1.2rem"}
            />
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
