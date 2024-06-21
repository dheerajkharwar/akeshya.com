"use client";
import Image from "next/image";
import Counters from "./Counters";
import countimg from "../../src/assets/img/counts-img.svg";

const CountsPage = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col lg:flex-row items-center justify-center p-20">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={countimg}
            alt="team work"
            className="mb-0 h-[18rem] w-auto rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center p-20">
          <Counters />
        </div>
      </div>
    </section>
  );
};

export default CountsPage;
