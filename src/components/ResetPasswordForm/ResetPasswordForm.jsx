import {
  Container,
  Heading,
  Link,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Checkbox,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import fetchHandler from "../../utils/fetchHandler";
import { useState } from "react";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(6, "Password too short!").required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const ResetPasswordForm = () => {
  const [message, setMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      maxW="md"
      flexGrow={1}
      justifyContent={"center"}
    >
      <Heading
        as={"h2"}
        size={"xl"}
        fontWeight={"500"}
        color={"blackAlpha.800"}
        textAlign={"center"}
      >
        Reset your password
      </Heading>
      <Formik
        initialValues={{
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={async (values, { resetForm }) => {
          setIsPending(true);
          try {
            const response = await fetchHandler.post(
              "/api/member/reset",
              values
            );
            if (response.data.status) {
              setMessage({
                status: "success",
                message: response.data.message,
              });
              setIsPending(false);
              resetForm();
            } else {
              setIsPending(false);
              setMessage({
                status: "warning",
                message: response.data.message,
              });
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
              <FormControl isInvalid={errors.password && touched.password}>
                <FormLabel htmlFor="password" color={"blackAlpha.700"}>
                  Password
                </FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  focusBorderColor="#38A169"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.passwordConfirm && touched.passwordConfirm}
              >
                <FormLabel htmlFor="password" color={"blackAlpha.700"}>
                  Confirm Password
                </FormLabel>

                <Field
                  as={Input}
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  focusBorderColor="#38A169"
                />
                <FormErrorMessage>{errors.passwordConfirm}</FormErrorMessage>
              </FormControl>
              <VStack align="stretch" width={"100%"} spacing={3}>
                <Button
                  variant={"solid"}
                  colorScheme="green"
                  type="submit"
                  isLoading={isPending}
                >
                  Reset
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
  );
};

export default ResetPasswordForm;
