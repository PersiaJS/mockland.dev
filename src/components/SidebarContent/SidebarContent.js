import { Box, useColorModeValue, Flex } from "@chakra-ui/react";
import NavItem from "../NavItem/NavItem";
import { FiHome, FiCompass } from "react-icons/fi";

const LinkItems = [
  { name: "Home", icon: FiHome, url: "/" },
  {
    name: "Terms And Conditions",
    icon: FiCompass,
    url: "/terms-and-conditions",
  },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      pt={5}
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "full", md: 60 }}
      h="full"
      borderRight={{ md: "1px", sm: "none" }}
      borderRightColor={{
        base: useColorModeValue("gray.200", "gray.700"),
        md: useColorModeValue("gray.200", "gray.700"),
      }}
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
export default SidebarContent;
