"use client";
import NavigationBar from "@/components/NavigationBar";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export const runtime = "edge";

const Contact = () => {
  return (
    <>
      <NavigationBar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
