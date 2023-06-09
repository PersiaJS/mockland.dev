import BreadCrumb from "@/components/Breadcrumb";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import Meta from "@/components/Meta/Meta";
import fetchHandler from "@/utils/fetchHandler";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "name is to short!")
    .max(32, "name is to long!")
    .required("name is required!"),
  email: Yup.string().email("invalid email!").required("email is required!"),
  description: Yup.string()
    .min(5, "description is to short!")
    .required("description is required!"),
});

const Contact = () => {
  const [message, setMessage] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetchHandler().post("/api/contact/create", values);
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
        message: "something went wrong. Please try again later.",
      });
    }
  };

  return (
    <LayoutWithSideBar>
      <Meta
        title="Mockland | Contact Us"
        description={"Mockland is a free fake API for testing and prototyping"}
      />
      <Box display="flex" flexDirection="column" px={"12"} gap={6}>
        <BreadCrumb
          pages={[
            { href: "/", name: "Home" },
            { href: "/contact", name: "Contact" },
          ]}
        />
        <Heading as="h2" mt="1rem">
          Contact Us
        </Heading>
        <Text mt="1rem">
          If you have any questions, feedback, or concerns about the mock APIs
          provided by mockland, we{`'`}d love to hear from you! Please use the
          form below to get in touch with us and we{`'`}ll do our best to
          respond to your inquiry as soon as possible.
        </Text>
        <Box width="full" py="2rem">
          {message && (
            <Box py={4}>
              <Alert status={message.status}>
                <AlertIcon />
                {message.message}
              </Alert>
            </Box>
          )}
          <Formik
            initialValues={{ name: "", email: "", description: "" }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      mt="1rem"
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel>Name</FormLabel>
                      <Input type="text" {...field} placeholder="Name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      mt="1rem"
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input type="email" {...field} placeholder="Email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="description">
                  {({ field, form }) => (
                    <FormControl
                      mt="1rem"
                      isInvalid={
                        form.errors.description && form.touched.description
                      }
                    >
                      <FormLabel fontSize="md">How we can help you?</FormLabel>
                      <Textarea
                        height="180px"
                        {...field}
                        placeholder="Description"
                      />
                      <FormErrorMessage>
                        {form.errors.description}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  width="100%"
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Send request
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </LayoutWithSideBar>
  );
};

export default Contact;
