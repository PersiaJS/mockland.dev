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

const MockCategoryIndex = () => {
  return (
    <Layout isActiveSideBar={true}>
      <Container>
        <Box display={"grid"} alignItems={"center"} height={"100vh"}>
          <Box>
            <BreadCrumb
              pages={[
                { href: "/", name: "Home" },
                { href: "/mocks", name: "Mocks" },
                { href: "/mocks/category", name: "Category" },
              ]}
            />
            <Heading as={"h1"}>Category</Heading>
            <Box my={8}>
              <p>GET: https://mockland.dev/api/category/list</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default MockCategoryIndex;
