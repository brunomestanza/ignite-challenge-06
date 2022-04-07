import Link from "next/link";
import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();
  return (
    <Flex 
      as="header"
      align="center"
      justifyContent="center"
      maxWidth={1440} 
      mx="auto" 
      position="relative"
      py="7"
    >
    { asPath !== "/" &&
      <Link href="/" passHref>
        <ChakraLink position="absolute" left="0">
          <Icon
            as={IoIosArrowBack}
            fontSize={24}
          />
        </ChakraLink>
      </Link> }
    <Image alt="World trip logo" src="/logo.png"/>
</Flex>
  );
};



