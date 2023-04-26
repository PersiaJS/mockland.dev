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
              <Link href="/mocks/category"> Category </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as={"h1"}>Category</Heading>
          <Box my={8}>
            <p>GET: https://mockland.dev/api/category/list</p>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MockCategoryIndex;
