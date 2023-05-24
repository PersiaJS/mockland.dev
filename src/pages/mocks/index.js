import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import BreadCrumb from "@/components/Breadcrumb";
import MocksCards from "@/components/MockCards";

const MocksIndex = () => {
  return (
    <LayoutWithSideBar>
      <Flex flexDir={"column"} px={"12"} gap={6}>
        <BreadCrumb
          pages={[
            { href: "/", name: "Home" },
            { href: "/mocks", name: "Mocks" },
          ]}
        />
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
