import { Box, Text, Container, Flex, Heading } from "@chakra-ui/react";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import CodeExample from "@/components/CodeExample/CodeExample";
import BreadCrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";

function CartDocs() {
  return (
    <>
      <Meta
        title="Cart Api Mocks | Mockland"
        description="Cart Apis are used to get the cart data. You can use the cart apis to test the application without having to implement the backend. By Default all the GET requests do not need any token. However, the POST, PUT and DELETE requests need a token. You can find your token in the profile drawer."
      />
      <LayoutWithSideBar>
        <Flex flexDir={"column"} gap={6} px={[4, 12]}>
          <BreadCrumb
            pages={[
              { href: "/", name: "Home" },
              { href: "/mocks", name: "Mocks" },
              { href: "/mocks/cart", name: "Cart" },
            ]}
          />
          <Heading as={"h2"} fontSize="4xl" fontWeight={"bold"}>
            Cart Api Mocks
          </Heading>
          <Text>
            Cart Apis are used to get the cart data. You can use the cart apis
            to test the application without having to implement the backend.
          </Text>
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            GET LIST
          </Heading>
          <Text>You can get the list of carts by using the following api.</Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/cart/list",{
  method: "GET",
  headers: {
    token: "YOUR_TOKEN",
  },
            }) 
  .then((response) => response.json()) 
  .then((data) => console.log(data));`}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            GET Item by :id
          </Heading>
          <Text>
            You can get a single cart by using the following api. You need to
            replace the :id with the id of the cart you want to get.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/cart/get-id/:id",{
  method: "GET",
  headers: {
    token: "YOUR_TOKEN",
  },
            })
  .then((response) => response.json())
  .then((data) => console.log(data));
          `}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            PUT Item by :id
          </Heading>
          <Text>
            You can update a single cart by using the following api. You need to
            replace the :id with the id of the cart you want to update.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/cart/update/:id", {
  method: "PUT",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    productId: 1,
    quantity: 2,
  }),
})
          `}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            DELETE Item by :id
          </Heading>
          <Text>
            You can delete a single cart by using the following api. You need to
            replace the :id with the id of the cart you want to delete.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/cart/delete/:id", {
  method: "DELETE",
  headers: {
    token: "YOUR_TOKEN",
  },
})
          `}
          />
          <br />
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight={"bold"}
            color={"blue.500"}
          >
            POST Create
          </Heading>
          <Text>You can create a single cart by using the following api.</Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/cart/create", {
  method: "PUT",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    productId: 1,
    quantity: 2,
  }),
})
          `}
          />
          <Text>
            If you have any questions, please contact us using the contact form.
          </Text>
        </Flex>
      </LayoutWithSideBar>
    </>
  );
}

export default CartDocs;
