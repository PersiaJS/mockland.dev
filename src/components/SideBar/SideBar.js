import { Box } from "@chakra-ui/react";
import NavItem from "../NavItem/NavItem";
import {
  FaComment,
  FaHome,
  FaQuestion,
  FaRegistered,
  FaServicestack,
  FaUserAlt,
} from "react-icons/fa";

const LinkItems = [
  { name: "Home", icon: FaHome, href: "/" },
  {
    name: "Mocks",
    icon: FaQuestion,
    href: "/mocks",
  },
  {
    name: "Terms And Conditions",
    icon: FaComment,
    href: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    icon: FaServicestack,
    href: "/privacy-policy",
  },
  {
    name: "Login",
    icon: FaUserAlt,
    href: "/auth/login",
  },
  {
    name: "Register",
    icon: FaRegistered,
    href: "/auth/register",
  },
];

const Sidebar = () => {
  return (
    <Box
      minW={"300px"}
      height={"100vh"}
      my={4}
      borderRight={"1px solid"}
      borderColor={"blue.600"}
      position={"sticky"}
      top={100}
    >
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          href={link.href}
          name={link.name}
        />
      ))}
    </Box>
  );
};
export default Sidebar;
