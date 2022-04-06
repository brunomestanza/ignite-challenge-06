import { Heading, HeadingProps } from "@chakra-ui/react";

interface H1Props extends HeadingProps {
  children: React.ReactNode;
}

export function H1 ({ children }: H1Props){
  return (
    <Heading as="h1" color="gray.50" fontSize="5xl" fontWeight="medium">
      {children}
    </Heading>
  )
};
