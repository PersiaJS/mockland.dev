import { Box, Flex, Text } from "@chakra-ui/react";

const ContactItem = ({ data }) => {
  return (
    <Flex
      my={4}
      role={"group"}
      w={"full"}
      rounded={"lg"}
      height={"100%"}
      flexDirection={"column"}
      gap={3}
      justifyContent={"space-between"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"
      }
      padding={4}
    >
      <Text fontSize="22px" fontWeight="600" textAlign="center">{data.name}</Text>
      <Text fontSize='16px'>{data.email}</Text>
      <Text borderRadius='8px' padding="2" bgColor="blue.100">{data.description}</Text>
    </Flex>
  );
};

export default ContactItem;
