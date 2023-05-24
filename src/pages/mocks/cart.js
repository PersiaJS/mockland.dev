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

const MockCartIndex = () => {
  return (
    <Layout isActiveSideBar={true}>
      <Container>
        <Box display={"grid"} alignItems={"center"} height={"100vh"}>
          <Box>
            <BreadCrumb
              pages={[
                { href: "/", name: "Home" },
                { href: "/mocks", name: "Mocks" },
                { href: "/mocks/cart", name: "Cart" },
              ]}
            />
            <Heading as={"h1"}>Cart</Heading>
            <Box my={8}>
              <p>GET: https://mockland.dev/api/cart/list</p>
              <p>GET: https://mockland.dev/api/cart/get-id/:id</p>
              <p>PUT: https://mockland.dev/api/cart/update/:id</p>
              <p>DELETE: https://mockland.dev/api/cart/delete/:id</p>
              <p>POST: https://mockland.dev/api/cart/create</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default MockCartIndex;
