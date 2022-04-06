import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelOptionProps {
  imageSource: string;
  title: string;
}

export function TravelOption({ imageSource, title }: TravelOptionProps) {
  return (
    <Flex direction="column" justify="space-between" align="center" h="150px">
      <Image alt={title} src={imageSource} />
      <Text>{title}</Text>
    </Flex>
  );
};
