import {
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  Input,
  FormErrorMessage,
  Box,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import fetchHandler from "@/utils/fetchHandler";
import Link from "next/link";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPasswordForm = () => {
  const [message, setMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const submitForm = async (values) => {
    setIsPending(true);
    try {
      const response = await fetchHandler.post("/api/member/forget", values);
      if (response.data.status) {
        setMessage({
          status: "success",
          message: response.data.message,
        });
        setIsPending(false);
        setIsSent(true);
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
  };

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      maxW="md"
      flexGrow={1}
      justifyContent={"center"}
      minH={"80vh"}
    >
      <VStack>
        <Heading
          as={"h2"}
          size={"xl"}
          fontWeight={"500"}
          color={"blackAlpha.800"}
          textAlign={"center"}
        >
          Forgot your password?
        </Heading>
        <Text textAlign={"center"} color={"blackAlpha.600"} fontWeight={"500"}>
          Enter your email to receive a password reset link.
        </Text>
      </VStack>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={submitForm}
      >
        {({ handleSubmit, errors, touched, values }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormControl isInvalid={errors.email && touched.email}>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Registered Email Address"
                  focusBorderColor="#38A169"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <VStack align="stretch" width={"100%"}>
                <Button
                  variant={"solid"}
                  colorScheme="blue"
                  type="submit"
                  isLoading={isPending}
                >
                  Recieve Reset Link
                </Button>
                {isSent && (
                  <>
                    <Text>
                      Didn{`'`}t receive an email?{" "}
                      <Link color="blue" onClick={() => submitForm(values)}>
                        Send again
                      </Link>
                    </Text>
                  </>
                )}
                <Link href="/auth/login">
                  <Button
                    variant={"outline"}
                    width={"100%"}
                    marginTop={2}
                    leftIcon={<ArrowBackIcon />}
                  >
                    Back to login page
                  </Button>
                </Link>
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

export default ForgotPasswordForm;
