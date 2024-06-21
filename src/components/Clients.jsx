import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import client1 from "../../src/assets/img/client-1.png";
import client2 from "../../src/assets/img/client-2.png";
import client3 from "../../src/assets/img/client-3.png";
import client4 from "../../src/assets/img/client-4.png";
import client5 from "../../src/assets/img/client-5.png";
import client6 from "../../src/assets/img/client-6.png";
import Image from "next/image";

export function Clients() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full bg-light-blue-50">
      <div className="flex flex-row items-center justify-between space-x-20 p-5">
        <Typography>
          <Image alt="client1" src={client1} width={100} height={80} />
        </Typography>
        <Typography>
          <Image alt="client2" src={client2} width={100} height={80} />
        </Typography>
        <Typography>
          <Image alt="client3" src={client3} width={100} height={80} />
        </Typography>
      </div>
      <div className="flex flex-row items-center justify-between space-x-20 p-5">
        <Typography>
          <Image src={client4} width={100} height={80} />
        </Typography>
        <Typography>
          <Image src={client5} width={100} height={80} />
        </Typography>
        <Typography>
          <Image src={client6} width={100} height={80} />
        </Typography>
      </div>
    </section>
  );
}

export default Clients;
