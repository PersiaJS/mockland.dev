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
      borderWidth="1px"
      borderRadius="md"
      bg="black"
      w="100%"
      color="white"
      position={"relative"}
    >
      <Button
        position={"absolute"}
        top={2}
        right={2}
        bg="blue.600"
        size="sm"
        onClick={handleCopy}
        colorScheme={copied ? "green" : "gray"}
      >
        {copied ? "copied!" : "Copy"}
      </Button>
      <Box mt={12} px={4} pb={6} overflowY={"scroll"} w={"100%"}>
        <pre>{code}</pre>
      </Box>
    </Box>
  );
}

export default CodeExample;
