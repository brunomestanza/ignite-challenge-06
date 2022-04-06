import { Divider, Flex } from "@chakra-ui/react";
import { TravelOptionContent } from "./TravelOptionContent";

interface TravelOptionContainerProps {
  hasBorder?: boolean;
  imageSource: string;
  title: string;
}

export function TravelOptionContainer({ hasBorder = false, imageSource, title }: TravelOptionContainerProps) {
  if (hasBorder) {
    return (
      <Flex
        align="center"
        direction="column"
        justify="space-between"
        height={250}
      >
        <TravelOptionContent imageSource={imageSource} title={title} />
        <Divider borderBottomColor="gray.900" borderBottomWidth={2} width="80%" />
      </Flex>
    );
  } else {
    return (
      <TravelOptionContent imageSource={imageSource} title={title} />
    );
  };
};
