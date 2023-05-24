import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import BreadCrumb from "@/components/Breadcrumb";
import MocksCards from "@/components/MockCards";

const MocksIndex = () => {
  return (
    <LayoutWithSideBar>
      <Container maxW={990}>
        <Box height={{ base: "auto", md: "110vh" }}>
          <Box>
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
              templateRows={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
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
          </Box>
        </Box>
      </Container>
    </LayoutWithSideBar>
  );
};

export default MocksIndex;
