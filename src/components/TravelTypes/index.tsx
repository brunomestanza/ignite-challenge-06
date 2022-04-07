import { Divider, Flex } from "@chakra-ui/react";
import { TravelOption } from "./TravelOption";

export function TravelTypes() {
  return (
    <Flex
      direction="column"
      maxWidth={1440}
      mt="20"
      mx="auto"
      px="10"
    >
      <Flex justify="space-evenly" mb="20">
        <TravelOption imageSource="/travel-types/life.png" title="Vida noturna" />
        <TravelOption imageSource="/travel-types/surf.png" title="Praia" />
        <TravelOption imageSource="/travel-types/modern.png" title="Moderno" />
        <TravelOption imageSource="/travel-types/classic.png" title="Clássico" />
        <TravelOption imageSource="/travel-types/more.png" title="E mais..." />
      </Flex>
      <Divider borderBottomColor="gray.900" borderBottomWidth={2} />
    </Flex>
  );
};
