import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import fetchHandler from "../../utils/fetchHandler";
import { useState } from "react";
import Link from "next/link";

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
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

const Register = () => {
  const [message, setMessage] = useState(null);

  return (
    <Container>
      <Box display={"grid"} alignItems={"center"} height={"100vh"}>
        <Box>
          <Box textAlign={"center"}>
            <Heading as={"h1"}>Register</Heading>
          </Box>
          <Box p={4}>
            <Formik
              initialValues={{ name: "Sasuke" }}
              validationSchema={SignupSchema}
              onSubmit={async (values, actions) => {
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
                  <Field name="firstName">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.firstName && form.touched.firstName
                        }
                      >
                        <FormLabel>First Name</FormLabel>
                        <Input {...field} placeholder="First Name" />
                        <FormErrorMessage>
                          {form.errors.firstName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.lastName && form.touched.lastName
                        }
                      >
                        <FormLabel>Last Name</FormLabel>
                        <Input {...field} placeholder="Last Name" />
                        <FormErrorMessage>
                          {form.errors.lastName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
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
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          {...field}
                          placeholder="Password"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Register
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
            <Box mt={8}>
              <UnorderedList>
                <ListItem>
                  <Link href="/auth/login">Login</Link>
                </ListItem>
                <ListItem>
                  <Link href="/auth/forget">Forget Password</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
