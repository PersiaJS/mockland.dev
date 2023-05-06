import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import fetchHandler from "../utils/fetchHandler";
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  const [user, setUser] = useState({});

  const getProfile = async () => {
    try {
      const response = await fetchHandler.get("/api/profile/get");
      setUser(response.data.profile);
    } catch (error) {
      console.log("NOT LOGGED IN");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Head>
        <title>Mockland | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero/>
        <Container>
          <Box display={"grid"} alignItems={"center"}>
            <Box></Box>
            <Box>
              <Box textAlign={"center"}>
                <Heading as={"h1"}>Welcome to Mockland</Heading>
              </Box>
              {user && (
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
              )}
              <Box
                display={"grid"}
                gridTemplateColumns={"1fr 1fr"}
                my={10}
                gridGap={4}
              >
                <Button colorScheme={"red"}>
                  <Link href="/auth/register">Register</Link>
                </Button>
                <Button colorScheme={"green"}>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </Box>
              <Box>
                <Button colorScheme={"blue"}>
                  <Link href="/mocks">Mocks</Link>
                </Button>
              </Box>
            </Box>
            <Box></Box>
          </Box>
        </Container>
      </main>
    </>
  );
}
