import Layout from "@/components/Layout/Layout";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const MockNewsIndex = () => {
  return (
    <Layout isActiveSideBar={true}>
    <Container>
      <Box display={"grid"} alignItems={"center"} height={"100vh"}>
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/"> HomePage </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/mocks"> Mocks </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href="/mocks/news"> News </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as={"h1"}>News</Heading>
          <Box my={8}>
            <p>GET: https://mockland.dev/api/news/list</p>
            <p>GET: https://mockland.dev/api/news/get-id/:id</p>
            <p>GET: https://mockland.dev/api/news/get-slug/:slug</p>
            <p>PUT: https://mockland.dev/api/news/update/:id</p>
            <p>DELETE: https://mockland.dev/api/news/delete/:id</p>
            <p>POST: https://mockland.dev/api/news/create</p>
          </Box>
        </Box>
      </Box>
      </Container>
      </Layout>
  );
};

export default MockNewsIndex;
