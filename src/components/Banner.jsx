import { Button, Typography } from "@material-tailwind/react";
import banner_img from "../assets/img/banner_img.png";
import Image from "next/image";

export function Banner() {
  return (
    <section className="p-8">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center mt-10">
        <div className="flex flex-col p-10">
          <Typography
            variant="h2"
            color="blue-gray"
            className="my-4 font-black text-4xl !leading-snug !text-blue-800"
          >
            Grow your business with Akeshya
          </Typography>
          <Typography className="font-extralight text-lg">
            We are team of talented website designers, developers & digital
            marketeers
            <br />
            <br />
            <Button color="blue">Get Started</Button>
            <br />
          </Typography>
        </div>
        <div className="flex flex-col p-10 pb-0">
          {/* <img
            src={`https://www.material-tailwind.com/img/content2.jpg`}
            alt="team work"
            className="mb-0 h-[18rem] w-auto rounded-xl object-cover"
          /> */}
          <Image
            src={banner_img}
            alt="banner image"
            className="mb-0 h-[18rem] w-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
