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

const MockProductIndex = () => {
  return (
    <Layout isActiveSideBar={true}>
      <Container>
        <Box display={"grid"} alignItems={"center"} height={"100vh"}>
          <Box>
            <BreadCrumb
              pages={[
                { href: "/", name: "Home" },
                { href: "/mocks", name: "Mocks" },
                { href: "/mocks/product", name: "Product" },
              ]}
            />
            <Heading as={"h1"}>Product</Heading>
            <Box my={8}>
              <p>GET: https://mockland.dev/api/product/list</p>
              <p>GET: https://mockland.dev/api/product/get-id/:id</p>
              <p>PUT: https://mockland.dev/api/product/update/:id</p>
              <p>DELETE: https://mockland.dev/api/product/delete/:id</p>
              <p>POST: https://mockland.dev/api/product/create</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default MockProductIndex;
