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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import UserContext from "@/contexts/UserContext";
import { FiLogOut } from "react-icons/fi";

const UserDrawer = () => {
  const { user } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
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
                  {`${user.firstName} ${user.lastName}`}
                </Heading>
                <Text>{user.email}</Text>
              </Box>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button rightIcon={<FiLogOut />}>Sign out</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserDrawer;
