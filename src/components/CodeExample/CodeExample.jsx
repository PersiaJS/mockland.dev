import { Button, useClipboard, Box, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

function CodeExample({ code }) {
  const [copied, setCopied] = useState(false);
  const { onCopy } = useClipboard(code);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      mb={4}
      bg="black"
      w="100%"
      color="white"
    >
      <Flex align="center" justifyContent="space-between">
        <Text fontSize="sm" fontWeight="bold" mb={2} color={"red.400"}>
          First Step:
        </Text>
        <Button
          bg="blue.600"
          size="sm"
          onClick={handleCopy}
          colorScheme={copied ? "green" : "gray"}
        >
          {copied ? "copied!" : "Copy"}
        </Button>
      </Flex>
      <pre>{code}</pre>
    </Box>
  );
}

export default CodeExample;
