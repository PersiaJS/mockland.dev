import {
  Container,
  Heading,
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
import Cookies from "universal-cookie";
import Link from "next/link";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
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
          Login to your account
        </Heading>
        <Text textAlign={"center"} color={"blackAlpha.600"} fontWeight={"500"}>
          Don{`'`}t have an account?{" "}
          <Link href="/auth/register" color="blue">
            Sign up
          </Link>
        </Text>
      </VStack>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: true,
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {
          setIsPending(true);
          try {
            const response = await fetchHandler.post(
              "/api/member/login",
              values
            );
            if (response.data.status) {
              const cookies = new Cookies();
              cookies.set("auth", response.data.auth, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7,
              });
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
                message: response.data.unVerified
                  ? "User is not verified, new link has been sent to your email, please open your mail account and click to verify"
                  : response.data.message,
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
              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email" color={"blackAlpha.700"}>
                  Email
                </FormLabel>

                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  focusBorderColor="#38A169"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
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
              <HStack w={"100%"} justifyContent={"space-between"}>
                <Field
                  as={Checkbox}
                  defaultChecked
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="blue"
                >
                  Remember me
                </Field>
                <Text color={"blue"} fontWeight={"500"}>
                  <Link href="/auth/forgotpassword">Forgot password</Link>
                </Text>
              </HStack>
              <VStack align="stretch" width={"100%"} spacing={5}>
                <Button
                  variant={"solid"}
                  colorScheme="blue"
                  isLoading={isPending}
                  type="submit"
                >
                  Sign in
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
