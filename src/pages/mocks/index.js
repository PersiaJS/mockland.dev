import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const MocksIndex = () => {
  return (
    <Container>
      <Box display={"grid"} alignItems={"center"} height={"100vh"}>
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/"> HomePage </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href="/mocks"> Mocks </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as={"h1"}>Mocks</Heading>
          <Box my={8} display={"grid"} gridGap={4}>
            <Link href="/mocks/news">
              <Button colorScheme="orange">News</Button>
            </Link>
            <Link href="/mocks/product">
              <Button colorScheme="messenger">Product</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MocksIndex;
