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
  FormHelperText,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { GoogleIcon } from "@/utils/createIcon";
import React from "react";

const LoginForm = () => {
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
      <VStack spacing={5}>
        <FormControl>
          <FormLabel color={"blackAlpha.700"}>Email</FormLabel>
          <Input type="email" focusBorderColor="#38A169" />
        </FormControl>
        <FormControl>
          <FormLabel color={"blackAlpha.700"}>Password</FormLabel>
          <Input type="password" focusBorderColor="#38A169" />
        </FormControl>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Checkbox defaultChecked colorScheme="green">
            Remember me
          </Checkbox>

          <Text color={"green"} fontWeight={"500"}>
            <Link>Forgot password</Link>
          </Text>
        </HStack>
        <VStack align="stretch" width={"100%"} spacing={5}>
          <Button variant={"solid"} colorScheme="green">
            Sign in
          </Button>
          <Button variant={"outline"} leftIcon={<GoogleIcon boxSize={5} />}>
            Sign in with Google
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default LoginForm;
