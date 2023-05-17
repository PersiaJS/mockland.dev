import { Flex, Icon, IconButton } from "@chakra-ui/react";
import Link from "next/link";

const MocksItem = ({ icon, children, href }) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="2"
        pl={8}
        borderRadius="sm"
        role="group"
        cursor="pointer"
        fontFamily={"heading"}
        fontWeight={"semibold"}
        color={"blue.600"}
      >
        {icon && (
          <IconButton
            icon={<Icon as={icon} color={"white"} fontSize={15} />}
            mr="4"
            size={"xs"}
            bgColor={"blue.400"}
            fontSize="sm"
            fontWeight={"bold"}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
export default MocksItem;
