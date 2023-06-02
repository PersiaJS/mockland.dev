import UserContext from "@/contexts/UserContext";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  Container,
  VStack,
  AlertIcon,
  Input,
  Alert,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import fetchHandler from "@/utils/fetchHandler";

function GenrateTokenForm({ isOpen, onClose }) {
  const { refreshUser, user } = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  const handelToken = async (e) => {
    e.preventDefult;

    try {
      setIsPending(true);
      const response = await fetchHandler.get("/api/token/generate");
      if (response.data.status) {
        setMessage({
          status: "success",
          message: response.data.message,
        });

        setValue(response.data.data.token);
        setIsPending(false);
      }
    } catch (error) {
      setIsPending(false);

      setMessage({
        status: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Genrate Token</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container
            display={"flex"}
            flexDirection={"column"}
            maxW="md"
            flexGrow={1}
            mb={4}
            justifyContent={"center"}
          >
            <Flex flexDirection={"column"} rowGap={2}>
              <Flex mb={2}>
                <Input
                  isDisabled={"true"}
                  borderRadius={0}
                  variant={"solid"}
                  borderWidth={1}
                  color={"gray.800"}
                  placeholder="text to be copied..."
                  _placeholder={{
                    color: "gray.900",
                  }}
                  type={"text"}
                  value={value}
                />
                <Button onClick={onCopy}>
                  {hasCopied ? "Copied!" : "Copy"}
                </Button>
              </Flex>

              <VStack align="stretch" width={"100%"} spacing={5}>
                <Button
                  borderRadius={0}
                  variant={"solid"}
                  colorScheme="blue"
                  isLoading={isPending}
                  type="submit"
                  onClick={handelToken}
                >
                  Genrate Token
                </Button>
              </VStack>
            </Flex>

            {message && (
              <Box py={4}>
                <Alert status={message.status}>
                  <AlertIcon />
                  {message.message}
                </Alert>
              </Box>
            )}
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default GenrateTokenForm;
