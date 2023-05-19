import React, { useState } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"100vw"}
        minHeight={"100vh"}
        padding={0}
      >
        <Header />
        <Flex>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"full"}
          >
            {children}
          </Box>
        </Flex>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
