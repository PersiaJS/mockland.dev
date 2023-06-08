import {
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
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
import fetchHandler from "@/utils/fetchHandler";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";

const VerifySchema = Yup.object().shape({
  securityHash: Yup.string().required("Required"),
});

const VerifyForm = () => {
  const [message, setMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  if (!router.query.securityHash) return null;
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
          Verify your e-mail
        </Heading>
        <Text textAlign={"center"} color={"blackAlpha.600"} fontWeight={"500"}>
          Enter the code sent to your email
        </Text>
      </VStack>
      <Formik
        initialValues={{
          securityHash: router.query.securityHash,
        }}
        validationSchema={VerifySchema}
        onSubmit={async (values, { resetForm }) => {
          setIsPending(true);
          try {
            const response = await fetchHandler().put("/api/member/verify", {
              ...values,
              securityHash: router.query.securityHash,
            });
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
              <FormControl
                isInvalid={errors.securityHash && touched.securityHash}
              >
                <FormLabel htmlFor="securityHash" color={"blackAlpha.700"}>
                  Verify Code
                </FormLabel>
                <Field
                  as={Input}
                  id="securityHash"
                  name="securityHash"
                  type="text"
                  focusBorderColor="#38A169"
                />
                <FormErrorMessage>{errors.securityHash}</FormErrorMessage>
              </FormControl>
              <VStack align="stretch" width={"100%"}>
                <Button
                  variant={"solid"}
                  colorScheme="green"
                  type="submit"
                  isLoading={isPending}
                >
                  Verify
                </Button>

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

export default VerifyForm;
