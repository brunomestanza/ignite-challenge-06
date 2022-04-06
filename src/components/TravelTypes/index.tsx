import { Flex } from "@chakra-ui/react";
import { TravelOptionContainer } from "./TravelOptionContainer";

export function TravelTypes() {
  return (
    <Flex
      justify="space-evenly"
      maxWidth={1440}
      mt="20"
      mx="auto"
      px="10"
    >
      <TravelOptionContainer imageSource="/travel-types/life.png" title="Vida noturna" />
      <TravelOptionContainer imageSource="/travel-types/surf.png" title="Praia" />
      <TravelOptionContainer hasBorder imageSource="/travel-types/modern.png" title="Moderno" />
      <TravelOptionContainer imageSource="/travel-types/classic.png" title="Clássico" />
      <TravelOptionContainer imageSource="/travel-types/more.png" title="E mais..." />
    </Flex>
  );
};
