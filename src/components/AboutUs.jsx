import { Button, Typography } from "@material-tailwind/react";
import CountsPage from "./CountsPage";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center border-b-2">
      <h1 className="mytitle text-center mt-20 pt-20 mb-10 font-bold flex items-center justify-center">
        ABOUT US
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="px-10 lg:w-6/12 w-full">
          <p>
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </p>
          <br />
          <p>
            <i className="fa-solid fa-check-double"></i>
            <span className="ml-3">
              We started with a simple idea: do what is best for the client.
            </span>
          </p>
          <p>
            <i className="fa-solid fa-check-double"></i>
            <span className="ml-3">
              Our methodical and individual approach to each project delivers
              the finest possible results for your media.
            </span>
          </p>
          <p>
            <i className="fa-solid fa-check-double"></i>
            <span className="ml-3">
              Our day-to-day work is to solve your problems utilising the most
              up-to-date, practical adaptive technology, and we have a lot of
              fun doing it.
            </span>
          </p>
        </div>
        <div className="px-10 lg:w-6/12 w-full">
          We're professional, but we're also friendly, and we'll always pay
          attention to your concerns. We expect to work with innovative people
          that have an open mind and are dedicated to making every idea a
          reality. We want to hear from you if you're interested in SEO, have
          Web Development ideas, or require a graphic designer who can match
          your goals.
          <br />
          <br />
          <Button color="blue">Learn More</Button>
        </div>
      </div>
      <CountsPage />
    </div>
  );
};

export default AboutUs;
