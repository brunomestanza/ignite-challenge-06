import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';
import '../styles/swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;