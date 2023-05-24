import BreadCrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout/Layout";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const MockAuthIndex = () => {
  return (
    <Layout isActiveSideBar={true}>
      <Container>
        <Box display={"grid"} alignItems={"center"} height={"100vh"}>
          <Box>
            <BreadCrumb
              pages={[
                { href: "/", name: "Home" },
                { href: "/mocks", name: "Mocks" },
                { href: "/mocks/auth", name: "Auth" },
              ]}
            />
            <Heading as={"h1"}>Auth</Heading>
            <Box my={8}>
              <p>POST: https://mockland.dev/auth/register</p>
              <p>POST: https://mockland.dev/auth/login</p>
              <p>POST: https://mockland.dev/auth/verify</p>
              <p>POST: https://mockland.dev/auth/reset</p>
              <p>POST: https://mockland.dev/auth/forget</p>
              <p>POST: https://mockland.dev/auth/edit-profile</p>
              <p>GET: https://mockland.dev/auth/profile</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default MockAuthIndex;
