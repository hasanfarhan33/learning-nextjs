import React from "react";
import Link from "next/link";
import Logo from "./carForward_scaled.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo Logo"
        width={40}
        quality={100}
        placeholder="blur"
      ></Image>
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
