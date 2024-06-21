"use client";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

export const runtime = "edge";

const About = () => {
  return (
    <>
      <NavigationBar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
