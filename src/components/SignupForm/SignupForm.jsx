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
import { GoogleIcon } from "@/utils/createIcon";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import fetchHandler from "../../utils/fetchHandler";
import { useState } from "react";
import Cookies from "universal-cookie";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short!").required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const LoginForm = () => {
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
      <VStack>
        <Heading
          as={"h2"}
          size={"xl"}
          fontWeight={"500"}
          color={"blackAlpha.800"}
          textAlign={"center"}
        >
          Create an account
        </Heading>
        <Text textAlign={"center"} color={"blackAlpha.600"} fontWeight={"500"}>
          Already have an account?{" "}
          <Link href="/auth/login" color="green">
            Log in
          </Link>
        </Text>
      </VStack>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
          rememberMe: true,
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          setIsPending(true);
          try {
            const response = await fetchHandler.post(
              "/api/member/register",
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
              <HStack>
                <FormControl isInvalid={errors.firstName && touched.firstName}>
                  <Field
                    as={Input}
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    focusBorderColor="#38A169"
                  />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.lastName && touched.lastName}>
                  <Field
                    as={Input}
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    focusBorderColor="#38A169"
                  />
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl isInvalid={errors.email && touched.email}>
                <Field
                  as={Input}
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  focusBorderColor="#38A169"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password && touched.password}>
                <Field
                  as={Input}
                  placeholder="Password"
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
                <Field
                  as={Input}
                  placeholder="Confirm password"
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
                  isLoading={isPending}
                  type="submit"
                >
                  Sign up
                </Button>
                <Button
                  variant={"outline"}
                  leftIcon={<GoogleIcon boxSize={5} />}
                >
                  Sign up with Google
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

export default LoginForm;
