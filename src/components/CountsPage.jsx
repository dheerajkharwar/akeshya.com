"use client";
import Image from "next/image";
import Counters from "./Counters";
import countimg from "../../src/assets/img/counts-img.svg";

const CountsPage = () => {
  return (
    <section className="counts-page py-8">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col p-10">
          <Image
            src={countimg}
            alt="team work"
            className="mb-0 h-[18rem] w-[25rem] rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <Counters />
        </div>
      </div>
    </section>
  );
};

export default CountsPage;
