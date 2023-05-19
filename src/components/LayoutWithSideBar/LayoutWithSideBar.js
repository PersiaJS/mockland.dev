import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/SideBar";

const LayoutWithSideBar = ({ children }) => {
  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"100wh"}
        minHeight={"100vh"}
        padding={0}
      >
        <Header />
        <Flex position={"relative"}>
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
            }}
          >
            <Sidebar />
          </Box>
          <Box display={"flex"} justifyContent={"center"} w={"full"} py={12}>
            {children}
          </Box>
        </Flex>
        <Footer />
      </Container>
    </>
  );
};

export default LayoutWithSideBar;
