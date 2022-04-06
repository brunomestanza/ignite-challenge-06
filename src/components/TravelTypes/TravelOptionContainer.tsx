import { Divider, Flex } from "@chakra-ui/react";
import { TravelOptionContent } from "./TravelOptionContent";

interface TravelOptionContainerProps {
  imageSource: string;
  title: string;
  hasBorder?: boolean;
}

export function TravelOptionContainer({ imageSource, title, hasBorder = false }: TravelOptionContainerProps) {
  if (hasBorder) {
    return (
      <Flex direction="column" justify="space-between" align="center" height={250}>
        <TravelOptionContent title={title} imageSource={imageSource} />
        <Divider width="80%" borderBottomColor="gray.900" borderBottomWidth={2} />
      </Flex>
    );
  } else {
    return (
      <TravelOptionContent title={title} imageSource={imageSource} />
    );
  };
};
