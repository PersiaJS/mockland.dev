import { Box, Text, Container, Flex, Heading } from "@chakra-ui/react";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import CodeExample from "@/components/CodeExample/CodeExample";
import BreadCrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";

function CategoryDocs() {
  return (
    <>
      <Meta
        title="Category Api Mocks | Mockland"
        description="Category Apis are used to get the category data. You can use the category apis to test the application without having to implement the backend. By Default all the GET requests do not need any token. However, the POST, PUT and DELETE requests need a token. You can find your token in the profile drawer."
      />
      <LayoutWithSideBar>
        <Flex flexDir={"column"} gap={6} px={[4, 12]}>
          <BreadCrumb
            pages={[
              { href: "/", name: "Home" },
              { href: "/mocks", name: "Mocks" },
              { href: "/mocks/category", name: "Category" },
            ]}
          />
          <Heading as={"h2"} fontSize="4xl" fontWeight={"bold"}>
            Category Api Mocks
          </Heading>
          <Text>
            Category Apis are used to get the category data. You can use the
            category apis to test the application without having to implement
            the backend.
          </Text>
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            GET LIST
          </Heading>
          <Text>
            We have 20 categories in our database. You can get all the category
            by using the following api.
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/category/list") 
  .then((response) => response.json()) 
  .then((data) => console.log(data));`}
          />
          <Text>
            If you have any questions, please contact us using the contact form.
          </Text>
        </Flex>
      </LayoutWithSideBar>
    </>
  );
}

export default CategoryDocs;
