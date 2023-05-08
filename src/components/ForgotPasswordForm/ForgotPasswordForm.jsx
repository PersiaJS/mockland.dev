import {
  Container,
  Heading,
  Link,
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

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPasswordForm = () => {
  const [message, setMessage] = useState(null);
  const [isSent, setIsSent] = useState(false);

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      maxW="md"
      flexGrow={1}
      justifyContent={"center"}
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
          Enter your email and verify your identity
        </Text>
      </VStack>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ForgotPasswordSchema}
        //just to test onSubmit, logics will be implemented later
        onSubmit={(values, { resetForm }) => {
          setIsSent(true);
          setMessage({
            status: "success",
            message:
              "we've sent you a verification code. Please check your mailbox (including spam).",
          });
          resetForm();
        }}
      >
        {({ handleSubmit, errors, touched }) => (
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
                <Button variant={"solid"} colorScheme="green" type="submit">
                  Verify
                </Button>
                {isSent && (
                  <>
                    <Text>
                      Didn't receive an email?{" "}
                      <Link color="green">Send again</Link>
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
