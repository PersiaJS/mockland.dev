import { Box } from "@chakra-ui/react";
import NavItem from "../NavItem/NavItem";
import {
  FaAddressBook,
  FaComment,
  FaHome,
  FaQuestion,
  FaRegistered,
  FaServicestack,
  FaUserAlt,
} from "react-icons/fa";
import UserContext from "@/contexts/UserContext";
import { useContext } from "react";

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
    name: "Contact Us",
    icon: FaAddressBook,
    href: "/contact",
  },
];

const AuthItems = [
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

const SidebarContent = () => {
  const { user } = useContext(UserContext);
  return (
    <Box>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          href={link.href}
          name={link.name}
        />
      ))}
      {!user &&
        AuthItems.map((link) => (
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
export default SidebarContent;
