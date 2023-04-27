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
              <Link href="/mocks/cart"> Cart </Link>
            </BreadcrumbItem>
          </Breadcrumb>
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
  );
};

export default MockCartIndex;
