import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import AboutTeam from "@/components/AboutTeam/AboutTeam";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mockland | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/MocklandLogo.ico" />
      </Head>

      <Layout>
        <main>
          <Hero />
          <AboutTeam />
        </main>
      </Layout>
    </>
  );
}
