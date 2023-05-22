import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import { Alert, AlertIcon, Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchHandler from "@/utils/fetchHandler";
import ContactItem from "@/components/ContactItem/ContactItem";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [message, setMessage] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetchHandler.get("/api/contact/list");
      if (response.data.status) {
        await setContacts(response.data.data);
        await setMessage({
          status: "success",
          message: response.data.message,
        });
        console.log("contacts", contacts);
      } else {
        setMessage({
          status: "warning",
          message: response.data.message,
        });
        console.log("message", message);
      }
    } catch (error) {
      setMessage({
        status: "error",
        message: "something went wrong. Please try again later.",
      });
      console.log("message", message, error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutWithSideBar>
      <Flex
        flexDir="column"
        width="full"
        py="2rem"
        px={{ base: "0", xl: "10rem", lg: "8rem", md: "6rem", sm: "0" }}
      >
        {message && (
          <Box py={4}>
            <Alert status={message.status}>
              <AlertIcon />
              {message.message}
            </Alert>
          </Box>
        )}
        <Flex flexDir="column" alignItems="center">
          {contacts &&
            contacts.map((data) => <ContactItem key={data.id} data={data} />)}
        </Flex>
      </Flex>
    </LayoutWithSideBar>
  );
};

export default ContactList;
