import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/SideBar";

const LayoutWithSideBar = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"100rem"}
        minHeight={"60rem"}
        padding={0}
      >
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
          <Box flexGrow={1} py={12}>
            {children}
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default LayoutWithSideBar;
