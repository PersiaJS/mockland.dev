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
  FormControl,
  FormLabel,
  HStack,
  AlertIcon,
  Input,
  FormErrorMessage,
  Alert,
  Text,
  Box,
} from "@chakra-ui/react";
import fetchHandler from "../../utils/fetchHandler";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import React, { useContext, useState } from "react";
const editProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
});

function EditeProfileForm({ isOpen, onClose }) {
  const { refreshUser, user } = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
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
            <Formik
              initialValues={{
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
              }}
              validationSchema={editProfileSchema}
              onSubmit={async (values, { resetForm }) => {
                setIsPending(true);
                setMessage(null);
                try {
                  const response = await fetchHandler.put(
                    "/api/member/edit-profile",
                    {
                      ...values,

                      newsletter: user.newsletter,
                    }
                  );
                  if (response.data.status) {
                    setMessage({
                      status: "success",
                      message: response.data.message,
                    });
                    refreshUser();
                    setIsPending(false);
                  }
                } catch (error) {
                  setIsPending(false);

                  setMessage({
                    status: "error",
                    message: "Something went wrong. Please try again later.",
                  });
                }
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl
                      isInvalid={errors.email && touched.email}
                      isDisabled={true}
                    >
                      <FormLabel htmlFor="Email" color={"blackAlpha.700"}>
                        Email
                      </FormLabel>

                      <Field
                        as={Input}
                        id="Email"
                        name="email"
                        type="Email"
                        focusBorderColor="#38A169"
                      />

                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={errors.firstName && touched.firstName}
                    >
                      <FormLabel htmlFor="firstName" color={"blackAlpha.700"}>
                        First Name
                      </FormLabel>

                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        type="text"
                        focusBorderColor="#38A169"
                      />

                      <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={errors.lastName && touched.lastName}
                    >
                      <FormLabel htmlFor="lastName" color={"blackAlpha.700"}>
                        Last Name
                      </FormLabel>

                      <Field
                        as={Input}
                        id="lastName"
                        name="lastName"
                        type="text"
                        focusBorderColor="#38A169"
                      />

                      <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </FormControl>

                    <HStack w={"100%"} justifyContent={"space-between"}>
                      <Text color={"blue.500"} fontWeight={"500"}></Text>
                    </HStack>
                    <VStack align="stretch" width={"100%"} spacing={5}>
                      <Button
                        variant={"solid"}
                        colorScheme="blue"
                        isLoading={isPending}
                        type="submit"
                      >
                        Edit Profile
                      </Button>
                    </VStack>
                  </VStack>
                </form>
              )}
            </Formik>
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

export default EditeProfileForm;
