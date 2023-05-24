import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import MocksCards from "@/components/MockCards";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const MocksIndex = () => {
  return (
    <LayoutWithSideBar>
      <Flex flexDir={"column"} px={6}>
        <Breadcrumb my={2}>
          <BreadcrumbItem>
            <Link href="/"> HomePage </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Link href="/mocks"> Mocks </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading as={"h1"}>Mocks</Heading>
        <Grid
          my={8}
          gridGap={4}
          templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
        >
          <GridItem>
            <MocksCards title="News" link="news" />
          </GridItem>
          <GridItem>
            <MocksCards title="Product" link="product" />
          </GridItem>
          <GridItem>
            <MocksCards title="Post" link="post" />
          </GridItem>
          <GridItem>
            <MocksCards title="Category" link="category" />
          </GridItem>
          <GridItem>
            <MocksCards title="Auth" link="auth" />
          </GridItem>
          <GridItem>
            <MocksCards title="Cart" link="cart" />
          </GridItem>
        </Grid>
      </Flex>
    </LayoutWithSideBar>
  );
};

export default MocksIndex;
