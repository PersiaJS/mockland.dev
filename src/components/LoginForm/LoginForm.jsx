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
          Don't have an account?{" "}
          <Link href="/auth/register" color="green">
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
              cookies.set("auth", response.data.auth);
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
                  colorScheme="green"
                >
                  Remember me
                </Field>
                <Text color={"green"} fontWeight={"500"}>
                  <Link href="/auth/forgotpassword">Forgot password</Link>
                </Text>
              </HStack>
              <VStack align="stretch" width={"100%"} spacing={5}>
                <Button
                  variant={"solid"}
                  colorScheme="green"
                  isLoading={isPending}
                  type="submit"
                >
                  Sign in
                </Button>
                <Button
                  variant={"outline"}
                  leftIcon={<GoogleIcon boxSize={5} />}
                >
                  Sign in with Google
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
