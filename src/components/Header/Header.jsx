import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Box,
  Button,
  Link,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import Mockland from "../Mockland/Mockland";
import NextLink from "next/link";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <header>
      <Flex
        height={"75px"}
        transition={"all 250ms"}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow="sm"
        px={{ base: "1rem", xl: "4rem", lg: "2rem", md: "1.5rem", sm: "1rem" }}
        py={"1rem"}
        gap={4}
      >
        <Mockland />
        <InputGroup
          display={{ base: "none", lg: "flex", md: "flex", sm: "flex" }}
          alignItems={"center"}
          boxShadow="base"
          height={"100%"}
          maxWidth={"600px"}
          borderRadius={"5px"}
        >
          <InputLeftElement
            pt={"3px"}
            pointerEvents="none"
            children={<Search2Icon color="gray.500" />}
          />
          <Input
            type="tel"
            _placeholder={{ color: "gray.500", fontSize: "16px" }}
            placeholder="Search Mocks"
            variant="unstyled"
          />
        </InputGroup>

        <Flex gap={4} alignItems={"Center"} height={"100%"}>
          <Box display={{ base: "none", md: "block" }}>
            <Flex justifyContent={"space-between"} gap={5}>
              <Link
                as={NextLink}
                href="https://github.com/PersiaJS/mockland.dev"
              >
                <Icon
                  viewBox="0 0 20 20"
                  _hover={{
                    color: "gray.600",
                  }}
                  color="gray.400"
                  boxSize={"20px"}
                  transition={"all 200ms"}
                >
                  <path
                    fill="currentColor"
                    d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
                  />
                </Icon>
              </Link>
              <Link
                as={NextLink}
                href="https://t.me/joinchat/BcZHTxkf2MoIC1pHxJ_xSw"
              >
                <Icon
                  viewBox="0 0 16 16 "
                  _hover={{
                    color: "gray.600",
                  }}
                  color="gray.400"
                  boxSize={"20px"}
                  transition={"all 200ms"}
                >
                  <path
                    fill="currentColor"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                  />
                </Icon>
              </Link>
              <Link as={NextLink} href="">
                <Icon
                  viewBox="0 0 146 146 "
                  _hover={{
                    color: "gray.600",
                  }}
                  color="gray.400"
                  boxSize={"20px"}
                  transition={"all 200ms"}
                >
                  <path
                    fill="currentColor"
                    d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
                  />
                </Icon>
              </Link>
            </Flex>
          </Box>
          <Flex gap={2}>
            <Link as={NextLink} href="/auth/login">
              <Button colorScheme="blue" variant="ghost">
                Log In
              </Button>
            </Link>
            <Link as={NextLink} href="/auth/register">
              <Button colorScheme="blue" variant="solid">
                Sign Up
              </Button>
            </Link>
          </Flex>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<HamburgerIcon boxSize={5} />}
              colorScheme="blackAlpha"
              variant="outline"
              onClick={onShowSidebar}
            />
          </Box>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
