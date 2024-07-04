"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLargeFill, RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    bar ? setBar(false) : setBar(true);
  };

  const links = ["home", "about", "contact"];

  return (
    <>
      <Flex justify='between' align='center' height='40px' px='4'>
        <Box className='cursor-pointer' onClick={() => setBar(false)}>
          <Link href='/'>
            <Text className='brand-text'>PURLITY</Text>
          </Link>
        </Box>

        <Box className='cursor-pointer' onClick={handleClick}>
          {bar ? <RiCloseLargeFill /> : <RiMenu4Fill />}
        </Box>
      </Flex>
      <ul
        className={`flex flex-col gap-4 z-20 max-sm:invisible ${
          bar ? "visible" : "hidden"
        } fixed right-0 top-10 p-14 border-l-2 border-fuchsia-800 w-1/4 h-full bg-[--color-background]`}
      >
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link === "home" ? "/" : link} onClick={handleClick}>
              {link.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      <ul
        className={`flex flex-col gap-4 z-20 md:invisible ${
          bar ? "visible" : "hidden"
        } fixed left-0 top-10 p-14 w-full h-full bg-[--color-background]`}
      >
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link === "home" ? "/" : link} onClick={handleClick}>
              {link.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
