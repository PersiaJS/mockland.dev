import Hero from "@/components/Hero/Hero";
import AboutTeam from "@/components/AboutTeam/AboutTeam";
import Layout from "@/components/Layout/Layout";
import Meta from "@/components/Meta/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Mockland | Free fake API for testing and prototyping"
        description={"Mockland is a free fake API for testing and prototyping"}
      />

      <Layout>
        <main>
          <Hero />
          <AboutTeam />
        </main>
      </Layout>
    </>
  );
}
