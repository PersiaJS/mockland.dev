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

const MockPostIndex = () => {
  return (
    <Layout isActiveSideBar={true}>
      <Container>
        <Box display={"grid"} alignItems={"center"} height={"100vh"}>
          <Box>
            <BreadCrumb
              pages={[
                { href: "/", name: "Home" },
                { href: "/mocks", name: "Mocks" },
                { href: "/mocks/post", name: "Post" },
              ]}
            />
            <Heading as={"h1"}>Post</Heading>
            <Box my={8}>
              <p>GET: https://mockland.dev/api/post/list</p>
              <p>GET: https://mockland.dev/api/post/get-id/:id</p>
              <p>PUT: https://mockland.dev/api/post/update/:id</p>
              <p>DELETE: https://mockland.dev/api/post/delete/:id</p>
              <p>POST: https://mockland.dev/api/post/create</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default MockPostIndex;
