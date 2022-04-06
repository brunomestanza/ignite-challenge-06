import { Flex, Icon, Image } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

export function Header() {
  return (
    <Flex as="header" py="7" maxWidth={1440} mx="auto">
			{/* <Icon alignSelf="center" fontSize={24} as={IoIosArrowBack} ml="144" /> */}
			<Image alt="World trip logo" mx="auto" src="/logo.png" />
    </Flex>
  );
};
