import { Box, Text, Container, Flex, Heading } from "@chakra-ui/react";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import CodeExample from "@/components/CodeExample/CodeExample";
import BreadCrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";

function AuthDocs() {
  return (
    <>
      <Meta
        title="Auth Api Mocks | Mockland"
        description="Auth Apis are used to get the auth data. You can use the auth apis to test the application without having to implement the backend. By Default all the GET requests do not need any token. However, the POST, PUT and DELETE requests need a token. You can find your token in the profile drawer."
      />
      <LayoutWithSideBar>
        <Flex flexDir={"column"} gap={6} px={[4, 12]}>
          <BreadCrumb
            pages={[
              { href: "/", name: "Home" },
              { href: "/mocks", name: "Mocks" },
              { href: "/mocks/auth", name: "Auth" },
            ]}
          />
          <Heading as={"h2"} fontSize="4xl" fontWeight={"bold"}>
            Auth Api Mocks
          </Heading>
          <Text>
            Auth Apis are used to get the auth data. You can use the auth apis
            to test the application without having to implement the backend. You
            can implement the whole auth system using the following apis.
          </Text>
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            POST REGISTER
          </Heading>
          <Text>
            You can register a new auth by using the following api. You need to
            send the following data in the body of the request.
          </Text>
          <Text>
            Registering a new auth will send an email to the user with a link to
            verify the email. You can use the clientUrl to redirect the user to
            your application.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/auth/register", {
  method: "POST",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    firstName: "John",
    lastName: "Doe",
    email: "test@test.com",
    password: "123456",
    clientUrl: "YOUR CLIENT URL",
  }),
});`}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            POST LOGIN
          </Heading>
          <Text>
            You can login a new auth by using the following api. You need to
            send the following data in the body of the request.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/auth/login", {
  method: "POST",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    email: "test@test.com",
    password: "123456",
    clientUrl: "YOUR CLIENT URL",
  }),
});`}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            POST VERIFY
          </Heading>
          <Text>
            You can verify a new auth by using the following api. You need to
            send the following data in the body of the request.
          </Text>
          <Text>
            To get the securityHash, you will receive an email after registering
            the auth. You can use the securityHash from the email to verify the
            auth.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/auth/verify", {
  method: "POST",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    securityHash: "123456",
  }),
});`}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            POST FORGET
          </Heading>
          <Text>
            You can forget a new auth by using the following api. You need to
            send the following data in the body of the request.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/auth/forget", {
  method: "POST",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    email: "test@test.com",
    clientUrl: "YOUR CLIENT URL",
  }),
});`}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            POST RESET
          </Heading>
          <Text>
            You can reset a new auth by using the following api. You need to
            send the following data in the body of the request.
          </Text>
          <Text>
            To get the securityHash, you will receive an email after registering
            the auth. You can use the securityHash from the email to verify the
            auth.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/auth/forget", {
  method: "POST",
  headers: {
    token: "YOUR_TOKEN"
  },
  body: JSON.stringify({
    password: "123456",
    passwordConfirm: "123456",
    securityHash: "123456",
  }),
});`}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            PUT EDIT PROFILE
          </Heading>
          <Text>
            You can edit your profile by using the following api. You need to
            send the following data in the body of the request.
          </Text>
          <Text>
            Token is the token you get after logging in. You can use the token
            to authenticate the user. However, auth in header is the auth token
            you get after logging in.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/auth/forget", {
  method: "PUT",
  headers: {
    token: "YOUR_TOKEN",
    auth: "YOUR AUTH TOKEN"
  },
  body: JSON.stringify({
    firstName: "John",
    lastName: "Doe",
    newsletter: true,
  }),
});`}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            GET PROFILE
          </Heading>
          <Text>
            You can get your profile by using the following api. You need to
          </Text>
          <Text>
            Token is the token you get after logging in. You can use the token
            to authenticate the user. However, auth in header is the auth token
            you get after logging in.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/auth/profile", {
  method: "GET",
  headers: {
    token: "YOUR_TOKEN",
    auth: "YOUR AUTH TOKEN"
  }
});`}
          />
          <br />
          <Text>
            If you have any questions, please contact us using the contact form.
          </Text>
        </Flex>
      </LayoutWithSideBar>
    </>
  );
}

export default AuthDocs;
