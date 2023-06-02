import { Box, Text, Container, Flex, Heading } from "@chakra-ui/react";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";
import CodeExample from "@/components/CodeExample/CodeExample";
import BreadCrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta/Meta";

function PostDocs() {
  return (
    <>
      <Meta
        title="Post Api Mocks | Mockland"
        description="Post Apis are used to get the post data. You can use the post apis to test the application without having to implement the backend. By Default all the GET requests do not need any token. However, the POST, PUT and DELETE requests need a token. You can find your token in the profile drawer."
      />
      <LayoutWithSideBar>
        <Flex flexDir={"column"} gap={6} px={[4, 12]}>
          <BreadCrumb
            pages={[
              { href: "/", name: "Home" },
              { href: "/mocks", name: "Mocks" },
              { href: "/mocks/post", name: "Post" },
            ]}
          />
          <Heading as={"h2"} fontSize="4xl" fontWeight={"bold"}>
            Post Api Mocks
          </Heading>
          <Text>
            Post Apis are used to get the post data. You can use the post apis
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
            We have 150 post in our database. You can get all the post by using
            the following api. and if you create new, it will be added to this
            list
          </Text>
          <Text>
            If you are wondering how you can use this api with javascript fetch
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/post/list") 
  .then((response) => response.json()) 
  .then((data) => console.log(data));`}
          />
          <Text>
            and if you want to get your own data addition to default content
            please add your token
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/post/list", {
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
            You can get a single post by using the following api. You need to
            replace the :id with the id of the post you want to get.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/post/get-id/:id")
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
            You can update a single post by using the following api. You need to
            replace the :id with the id of the post you want to update.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/post/update/:id", {
  method: "PUT",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    title: "New Title",
    body: "New Body",
    tags: ["New Tag"],
    reactions: {
      like: 0,
      love: 0,
      haha: 0,
      wow: 0,
      sad: 0,
      angry: 0,
    },
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
            You can delete a single post by using the following api. You need to
            replace the :id with the id of the post you want to delete.
          </Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/post/delete/:id", {
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
          <Text>You can create a single post by using the following api.</Text>
          <CodeExample
            code={`fetch("https://mockland.dev/api/post/create", {
  method: "PUT",
  headers: {
    token: "YOUR_TOKEN",
  },
  body: JSON.stringify({
    title: "New Title",
    body: "New Body",
    tags: ["New Tag"],
    reactions: {
      like: 0,
      love: 0,
      haha: 0,
      wow: 0,
      sad: 0,
      angry: 0,
    },
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

export default PostDocs;
