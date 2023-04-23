import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import fetchHandler from "../../utils/fetchHandler";
import { useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const Login = () => {
  const [message, setMessage] = useState(null);

  return (
    <div>
      <h1>Login</h1>
      <Box p={4}>
        <Formik
          initialValues={{ name: "Sasuke" }}
          validationSchema={SignupSchema}
          onSubmit={async (values, actions) => {
            try {
              const response = await fetchHandler.post(
                "/api/auth/login",
                values
              );
              if (response.data.status) {
                const cookies = new Cookies();
                cookies.set("auth", response.data.auth);
                setMessage({
                  status: "success",
                  message: response.data.message,
                });
              } else {
                setMessage({
                  status: "warning",
                  message: response.data.message,
                });
              }
            } catch (error) {
              setMessage({
                status: "error",
                message: "Something went wrong. Please try again later.",
              });
            }
          }}
        >
          {(props) => (
            <Form>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input type="email" {...field} placeholder="Email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel>Password</FormLabel>
                    <Input type="password" {...field} placeholder="Password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Login
              </Button>
            </Form>
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
        <Box>
          <UnorderedList>
            <ListItem>
              <Link href="/">Homepage</Link>
            </ListItem>
            <ListItem>
              <Link href="/auth/register">Register</Link>
            </ListItem>
            <ListItem>
              <Link href="/auth/forget">Forget Password</Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
