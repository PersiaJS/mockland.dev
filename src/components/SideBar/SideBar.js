import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import Link from "next/link";

import Mockland from "../Mockland/Mockland";
import SidebarContent from "./SidebarContent/SidebarContent";

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box left={0} w="200px" top={0} h="100vh" bg="white">
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody boxShadow={2}>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
