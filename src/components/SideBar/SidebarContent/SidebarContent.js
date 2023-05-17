import { Box, useColorModeValue, Flex, Heading } from "@chakra-ui/react";
import MocksItem from "../MocksItem/MocksItem";

import {
  FaFlag,
  FaHome,
  FaList,
  FaNewspaper,
  FaProductHunt,
  FaShoppingCart,
  FaStickyNote,
  FaUser,
} from "react-icons/fa";
import MockCategoryIndex from "@/pages/mocks/category";
import NavItem from "../NavItem/NavItem";

const mocksItems = [
  { name: "News", icon: FaNewspaper, href: "/mocks/news" },
  { name: "Products", icon: FaProductHunt, href: "/mocks/product" },
  { name: "Category", icon: FaList, href: "/mocks/category" },
  { name: "Post", icon: FaStickyNote, href: "/mocks/post" },
  { name: "Card", icon: FaShoppingCart, href: "/mocks/cart" },
  { name: "Auth", icon: FaUser, href: "/mocks/auth" },
];

const NavLink = [
  { name: "Home", icon: FaHome, href: "/" },
  { name: "Get Started", icon: FaFlag, href: "/get-started" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <>
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
        <Box mt={10} mb={3}>
          {NavLink.map((item) => (
            <NavItem name={item.name} icon={item.icon} href={item.href} />
          ))}
        </Box>
        <Flex pl={5} pb={4} alignItems={"center"} gap={2}>
          <FaList fontSize={"15px"} color="var(--chakra-colors-blue-500)" />

          <Heading
            as={"h2"}
            fontSize={20}
            color={"blue.500"}
            fontWeight={"bold"}
          >
            Mocks
          </Heading>
        </Flex>
        {mocksItems.map((link) => (
          <MocksItem key={link.name} icon={link.icon} href={link.href}>
            {link.name}
          </MocksItem>
        ))}
      </Box>
    </>
  );
};
export default SidebarContent;
