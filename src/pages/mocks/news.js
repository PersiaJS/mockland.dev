import { Box, Text, Container, Flex, Heading } from "@chakra-ui/react";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import CodeExample from "@/components/CodeExample/CodeExample";
import BreadCrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";

function NewsDocs() {
  return (
    <>
      <Meta
        title="News Api Mocks | Mockland"
        description="News Apis are used to get the news data. You can use the news apis to test the application without having to implement the backend. By Default all the GET requests do not need any token. However, the POST, PUT and DELETE requests need a token. You can find your token in the profile drawer."
      />
      <LayoutWithSideBar>
        <Flex flexDir={"column"} gap={6} px={[4, 12]}>
          <BreadCrumb
            pages={[
              { href: "/", name: "Home" },
              { href: "/mocks", name: "Mocks" },
              { href: "/mocks/news", name: "News" },
            ]}
          />
          <Heading as={"h2"} fontSize="4xl" fontWeight={"bold"}>
            News Api Mocks
          </Heading>
          <Text>
            News Apis are used to get the news data. You can use the news apis
            to test the application without having to implement the backend. By
            Default all the GET requests do not need any token. However, the
            POST, PUT and DELETE requests need a token. You can find your token
            in the profile drawer.
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
            We have 196 news in our database. You can get all the news by using
            the following api. and if you create new, it will be added to this
            list
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/news/list") 
  .then((response) => response.json()) 
  .then((data) => console.log(data));`}
          />
          <Text>
            and if you want to get your own data addition to default content
            please add your token
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/news/list", {
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
            GET Item by :id
          </Heading>
          <Text>
            You can get a single news by using the following api. You need to
            replace the :id with the id of the news you want to get.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/news/get-id/:id")
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
            GET Item by :slug
          </Heading>
          <Text>
            You can get a single news by using the following api. You need to
            replace the :slug with the slug of the news you want to get.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/news/get-slug/:slug")
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
            You can update a single news by using the following api. You need to
            replace the :id with the id of the news you want to update.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/news/update/:id", {
  method: "PUT",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    title: "New Title",
    description: "New Description",
    content: "New Content",
    image: "https://picsum.photos/200/300",
    author: "New Author",
    slug: "new-slug",
    publishedAt: new Date(),
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
            You can delete a single news by using the following api. You need to
            replace the :id with the id of the news you want to delete.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/news/delete/:id", {
  method: "PUT",
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
          <Text>You can create a single news by using the following api.</Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/news/create", {
  method: "PUT",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    title: "New Title",
    description: "New Description",
    content: "New Content",
    image: "https://picsum.photos/200/300",
    slug: "new-slug",
    author: "New Author",
    publishedAt: new Date(),
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

export default NewsDocs;
