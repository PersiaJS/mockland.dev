import { Box, Text, Container, Flex } from "@chakra-ui/react";
import LayoutWithSideBar from "@/components/LayoutWithSideBar/LayoutWithSideBar";

function NewsDocs() {
  return (
    <>
      <LayoutWithSideBar>
        <main>
          <Flex gap={12}>
            <Container maxW="4xl">
              <Box display={"grid"} alignItems={"center"}>
                <Text fontSize="5xl">NewsDocs Page</Text>
                <Text mt={5}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text>
                <p>GET: https://mockland.dev/api/news/list</p>
                <p>GET: https://mockland.dev/api/news/get-id/:id</p>
                <p>GET: https://mockland.dev/api/news/get-slug/:slug</p>
                <p>PUT: https://mockland.dev/api/news/update/:id</p>
                <p>DELETE: https://mockland.dev/api/news/delete/:id</p>
                <p>POST: https://mockland.dev/api/news/create</p>
                <br />
                <Box bg="black" w="100%" p={4} color="white">
                  <Box
                    as="button"
                    borderRadius="md"
                    bg="blue.600"
                    color="white"
                    px={4}
                    h={8}
                  >
                    copy
                  </Box>
                  <Text mt={5}> #first step</Text>
                  <Text mt={6} color={"blue.600"}>
                    npm i @chakra-ui/react @emotion/react @emotion/styled
                    framer-motion
                  </Text>
                </Box>
                <Text mt={5}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text>
                <br />
                <Text fontSize="5xl">NewsDocs Page</Text>
                <Text mt={5} pb={10}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text>
              </Box>
            </Container>
          </Flex>
        </main>
      </LayoutWithSideBar>
    </>
  );
}

export default NewsDocs;
