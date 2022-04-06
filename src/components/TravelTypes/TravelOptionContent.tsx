import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelOptionContentProps {
  imageSource: string;
  title: string;
}

export function TravelOptionContent({ imageSource, title }: TravelOptionContentProps) {
  return (
    <Flex
      align="center"
      direction="column"
      justify="space-between"
      height={150}
    >
      <Image alt={title} src={imageSource} />
      <Text color="gray.800" fontSize="2xl" fontWeight="semibold">{title}</Text>
    </Flex>
  );
};
