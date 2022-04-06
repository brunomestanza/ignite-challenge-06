import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box height="330px">
      <Box bgImage="/banner-background.png" bgPosition="center" bgSize="cover" bgRepeat="no-repeat" height="90%">
        <Flex maxW={1440} justify="space-between" mx="auto" py="10" px="10">
          <Stack spacing={8}>
            <Heading color="gray.50" fontSize="5xl" fontWeight="medium">5 Continentes,<br/>infinitas possibilidades.</Heading>
            <Text color="gray.200" fontSize="2xl">Chegou a hora de tirar do papel a viagem<br/>que você sempre sonhou.</Text>
          </Stack>
          <Image alt="World trip logo" src="/airplane.png" transform="rotate(5deg);" />
        </Flex>
      </Box>
    </Box>
  );
};
