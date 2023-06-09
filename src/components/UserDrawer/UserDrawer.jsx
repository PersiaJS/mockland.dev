import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Heading,
  Text,
  Avatar,
  Flex,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import UserContext from "@/contexts/UserContext";
import { FiLogOut } from "react-icons/fi";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { FaEdit } from "react-icons/fa";
import EditeProfileForm from "../EditProfileForm/EditeProfileForm";
import GenrateTokenForm from "./GenrateTokenForm/GenrateTokenForm";

const cookies = new Cookies();

const UserDrawer = () => {
  const router = useRouter();
  const { user, refreshUser } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modelIsopen,
    onOpen: modelOnopen,
    onClose: modelOnClose,
  } = useDisclosure();
  const {
    isOpen: tokenIsOpen,
    onOpen: tokenOnOpen,
    onClose: tokenOnClose,
  } = useDisclosure();
  const btnRef = useRef();

  const handleLogout = () => {
    cookies.remove("auth");
    refreshUser();
    onClose();
    router.push("/");
  };

  return (
    <>
      <Button
        leftIcon={
          <Avatar size={"xs"} name={`${user.firstName} ${user.lastName}`} />
        }
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpen}
      >
        My Account
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Account</DrawerHeader>

          <DrawerBody padding={0}>
            <Box
              height={"28"}
              backgroundImage="url('userProfileBg.svg')"
              backgroundPosition="center"
              backgroundSize={"cover"}
            ></Box>
            <Flex padding={"7"} flexDir={"column"} gap={4}>
              <Avatar
                name={`${user.firstName} ${user.lastName}`}
                size={"lg"}
                marginTop={"-3.5rem"}
                border={"solid white 3px"}
                boxShadow={"base"}
              />
              <Box>
                <Heading as={"h1"} size={"md"} fontWeight={"medium"}>
                  {`${user.firstName} ${user.lastName}`}{" "}
                </Heading>
                <Text>{user.email}</Text>
              </Box>
            </Flex>
            <Flex padding={"4"} flexDir={"column"} gap={4}>
              <Button colorScheme="blue" bg={"gray.500"} onClick={modelOnopen}>
                Edit Profile
              </Button>
              <EditeProfileForm isOpen={modelIsopen} onClose={modelOnClose} />
            </Flex>
            <Flex padding={"4"} flexDir={"column"} gap={4}>
              <Button colorScheme="blue" bg={"blue.500"} onClick={tokenOnOpen}>
                Generate Token
              </Button>
              <GenrateTokenForm isOpen={tokenIsOpen} onClose={tokenOnClose} />
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={handleLogout} rightIcon={<FiLogOut />}>
              Sign out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserDrawer;
