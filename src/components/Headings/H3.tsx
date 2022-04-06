import { Heading, HeadingProps } from "@chakra-ui/react";

interface H3Props extends HeadingProps {
  children: React.ReactNode;
}

export function H3 ({ children }: H3Props){
  return (
    <Heading as="h3" color="gray.900" fontSize="4xl" fontWeight="medium">
      {children}
    </Heading>
  )
};
