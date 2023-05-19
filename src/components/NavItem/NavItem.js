import { Flex, Icon, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavItem({ name, icon, href }) {
  const router = useRouter();
  return (
    <>
      <Link href={href}>
        <Flex
          p={2}
          alignItems={"center"}
          gap={2}
          role="group"
          fontSize={"sm"}
          color={router.pathname === href ? "blue.500" : "gray.600"}
          fontWeight={"bold"}
        >
          <IconButton
            size={"xs"}
            ml={5}
            bg={router.pathname === href ? "blue.500" : "gray.600"}
            icon={<Icon as={icon} color={"white"} fontSize={15} />}
            color={router.pathname === href ? "blue.500" : "gray.600"}
          />

          {name}
        </Flex>
      </Link>
    </>
  );
}

export default NavItem;
