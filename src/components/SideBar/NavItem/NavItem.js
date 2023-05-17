import Home from "@/pages";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaFlag, FaHome } from "react-icons/fa";

function NavItem({ name, icon, href }) {
  return (
    <>
      <Link href={href}>
        <Flex
          p={2}
          alignItems={"center"}
          gap={2}
          role="group"
          fontSize={"sm"}
          color={"blue.500"}
          fontWeight={"bold"}
        >
          <IconButton
            size={"xs"}
            ml={5}
            bg={"blue.500"}
            icon={<Icon as={icon} color={"white"} fontSize={15} />}
            color="blue.500"
            _groupHover={{
              color: "blue.500",
            }}
          />

          {name}
        </Flex>
      </Link>
    </>
  );
}

export default NavItem;
