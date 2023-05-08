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

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(6, "Password too short!").required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const ResetPasswordForm = () => {
  const [message, setMessage] = useState(null);

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
      >
        {({ errors, touched }) => (
          <form>
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
                <Button variant={"solid"} colorScheme="green" type="submit">
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