import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { H3 } from "../components/Headings/H3";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Banner />
      <TravelTypes />
      <Box textAlign="center" maxWidth={1440} mx="auto" mt="20">
        <H3>Vamos nessa?<br/>Então escolha seu continente</H3>
      </Box>
    </>
  );
};
