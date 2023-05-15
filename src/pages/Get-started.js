import Hero from "@/components/Hero/Hero";
import LayoutwSideBar from "@/components/LayoutwSideBar/LayoutwSideBar";
import Layout from "@/components/LayoutwSideBar/LayoutwSideBar";

export default function getStarted() {
  return (
    <>
      <LayoutwSideBar>
        <Hero />
      </LayoutwSideBar>
    </>
  );
}
