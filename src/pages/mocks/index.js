import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
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
    <LayoutWithSideBar>
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
              <Link href="/mocks/post">
                <Button colorScheme="yellow">Post</Button>
              </Link>
              <Link href="/mocks/category">
                <Button colorScheme="blue">Category</Button>
              </Link>
              <Link href="/mocks/auth">
                <Button colorScheme="cyan">Auth</Button>
              </Link>
              <Link href="/mocks/cart">
                <Button colorScheme="pink">Cart</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </LayoutWithSideBar>
  );
};

export default MocksIndex;
