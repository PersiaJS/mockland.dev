import React, { useState } from "react";
import { Box, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/SideBar";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

const Layout = ({ children, isActiveSideBar = false }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"100vw"}
        minHeight={"100vh"}
        padding={0}
      >
        <Header
          toggleSidebar={toggleSidebar}
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
        <Flex>
          {(isActiveSideBar ||
            isSidebarOpen) && (
              <Sidebar
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
              />
            )}
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
