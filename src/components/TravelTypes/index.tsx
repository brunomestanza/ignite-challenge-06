import { Flex } from "@chakra-ui/react";
import { TravelOptionContainer } from "./TravelOptionContainer";

export function TravelTypes() {
  return (
    <Flex maxWidth={1440} mx="auto" mt="20" px="10" justify="space-evenly">
      <TravelOptionContainer title="Vida noturna" imageSource="/travel-types/life.png" />
      <TravelOptionContainer title="Praia" imageSource="/travel-types/surf.png" />
      <TravelOptionContainer title="Moderno" imageSource="/travel-types/modern.png" hasBorder />
      <TravelOptionContainer title="Clássico" imageSource="/travel-types/classic.png" />
      <TravelOptionContainer title="E mais..." imageSource="/travel-types/more.png" />
    </Flex>
  );
};
