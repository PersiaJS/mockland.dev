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
              <Link href="/mocks/product"> Product </Link>
            </BreadcrumbItem>
          </Breadcrumb>
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
  );
};

export default MockProductIndex;
