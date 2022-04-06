import { Flex } from "@chakra-ui/react";
import { TravelOption } from "./TravelOption";

export function TravelTypes() {
  return (
    <Flex maxWidth={1440} mx="auto" mt="20" px="10" justify="space-evenly">
      <TravelOption title="Vida noturna" imageSource="/travel-types/life.png" />
      <TravelOption title="Praia" imageSource="/travel-types/surf.png" />
      <TravelOption title="Moderno" imageSource="/travel-types/modern.png" />
      <TravelOption title="Clássico" imageSource="/travel-types/classic.png" />
      <TravelOption title="E mais..." imageSource="/travel-types/more.png" />
    </Flex>
  );
};
