"use client";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Processes from "@/components/Processes";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <Clients />
      <AboutUs />
      <Services />
      <Processes />
      <Features />
      <ContactUs />
      <Footer />
    </>
  );
}
