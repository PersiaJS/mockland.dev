import React, { useState } from "react";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
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
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          {children}
        </Box>

        <Footer />
      </Container>
    </>
  );
};

export default Layout;
