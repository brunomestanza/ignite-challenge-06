import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { H3 } from "../components/Headings/H3";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";
import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api";  
    this.get('/continents', () => {
      return [
        {
          img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
          slug: 'europa',
          title: 'Europa',
          subtitle: 'O continente mais antigo',
        },
      ];
    });
  },
});

export default function Home() {
  return (
    <>
      <Banner />
      <TravelTypes />
      <Box textAlign="center" maxWidth={1440} mx="auto" my="20">
        <H3>Vamos nessa?<br/>Então escolha seu continente</H3>
      </Box>
      <Slider />
    </>
  );
};
