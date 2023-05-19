import { Box, Text, Container, Spacer, Center } from "@chakra-ui/react";
import Mockland from "@/components/Mockland/Mockland";

function PrivacyPolicy() {
  return (
    <>
      <Box ml={10}>
        <Box maxW={"380px"}>
        <Text fontSize="lg" mt={3}>
        Current as of Mai 19, 2023
          </Text>
          <Text
            fontSize="5xl"
            bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
            as="b"
          >
            Privacy Policy
          </Text>
        </Box>
        <Box maxW={"550px"}>
          <Text fontSize="lg" mt={3}>
            Your privacy is important to us. We respect your privacy regarding
            any information we may collect from you across our website.
          </Text>
        </Box>
      </Box>
      <br />
      <Container>
        <Box display={"grid"} alignItems={"center"}>
          <Text fontSize="5xl">General rules</Text>
          <Text mt={5}>
            testChakra UI Pro does not share personal information of any kind
            with anyone. We will not sell or rent your name or personal
            information to any third party.
          </Text>
          <Text mt={5}>
            We do not sell, rent or provide outside access to our mailing list
            or any data we store. Any data that a user stores via our website is
            wholly owned by that user or business.
          </Text>
          <Text mt={5}>
            At any time a user or business is free to take their data and leave,
            or to simply delete their data from our website.
          </Text>
          <Text mt={5}>
            Chakra UI Pro only collects such personal information that is
            necessary for you to access and use our services. This personal
            information includes, but is not limited to, first and last name,
            email address.
          </Text>
          <Text mt={5}>
            Chakra UI Pro may release personal information if Chakra UI Pro is
            required to by law, search warrant, subpoena, court order or fraud
            investigation. We may also use personal information in a manner that
            does not identify you specifically nor allow you to be contacted but
            does identify certain criteria about our Site's users in general
            (such as we may inform third parties about the number of registered
            users, number of unique visitors, and the pages most frequently
            browsed).
          </Text>
          <br />
          <Text fontSize="5xl">Changes about privacy</Text>
          <Text mt={5}>
            If we change our terms of use we will post those changes on this
            page. Registered users will be sent an email that outlines changes
            made to the terms of use.
          </Text>
        </Box>
      </Container>
    </>
  );
}

export default PrivacyPolicy;
