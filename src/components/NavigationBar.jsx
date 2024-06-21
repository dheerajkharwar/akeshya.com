"use client";
import React from "react";
import logo from "../../src/assets/img/logo.png";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavItem({ label, path }) {
  return (
    <Link href={path}>
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        {label}
      </Typography>
    </Link>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" path="/" />
      <NavItem label="About" path="/about" />
      <NavItem label="Services" path="/services" />
    </ul>
  );
}

export function NavigationBar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar fullWidth className="fixed mynav">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          color="blue-gray"
          className="mr-4 cursor-pointer text-lg font-bold"
        >
          <h1 className="company-logo" style={{ color: "#14279b" }}>
            <Image src={logo} alt="Akeshya logo" width={60} height={60} />
            AKESHYA
          </h1>
        </Typography>
        <div className="hidden lg:inline-flex">
          <NavList />
          <Button
            onClick={() => router.push("/contact")}
            color="blue-gray"
            className="hidden lg:inline-block ml-5"
          >
            Contact Us
          </Button>
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button
            onClick={() => router.push("/contact")}
            color="blue-gray"
            className="mb-2"
            fullWidth
          >
            Contact Us
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavigationBar;
