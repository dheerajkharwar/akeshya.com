"use client";
import NavigationBar from "@/components/NavigationBar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const runtime = "edge";

const Service = () => {
  return (
    <>
      <NavigationBar />
      <Services />
      <Footer />
    </>
  );
};

export default Service;
