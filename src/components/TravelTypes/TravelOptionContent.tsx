import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelOptionContentProps {
  imageSource: string;
  title: string;
}

export function TravelOptionContent({ imageSource, title }: TravelOptionContentProps) {
  return (
    <Flex direction="column" justify="space-between" align="center" height={150}>
      <Image alt={title} src={imageSource} />
      <Text fontWeight="semibold" color="gray.800" fontSize="2xl">{title}</Text>
    </Flex>
  );
};
