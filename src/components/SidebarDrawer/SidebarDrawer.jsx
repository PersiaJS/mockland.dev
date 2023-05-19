import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import SideBarContent from "../SideBarContent/SideBarContent";

const UserDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "block",
          lg: "none",
        }}
      >
        <IconButton
          icon={<HamburgerIcon boxSize={5} />}
          colorScheme="blue"
          variant="ghost"
          ref={btnRef}
          onClick={onOpen}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody marginTop={"3rem"}>
            <SideBarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserDrawer;
