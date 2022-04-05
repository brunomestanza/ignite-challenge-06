import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#47585B",
      "800": "#5D6C6F",
      "500": "#999999",
      "200": "#DADADA",
      "50": "#F5F8FA",
    },
    orange: {
      "500": "#FFBA08",
      "200": "#FFDC83",
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
});
