import { Center, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";

interface SlidesType {
  img: string;
  slug: string;
  title: string;
  subtitle: string;
}

export function Slider() {
  const [slides, setSlides] = useState<SlidesType[]>([]);

  useEffect(() => {
    async function getContinents() {
      await fetch('http://localhost:3000/api/continents')
      .then(response => response.json())
      .then(data => setSlides(data));
    }
    getContinents();
  }, []);

  const item = {
    img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
    slug: '/',
    title: 'Europa',
    subtitle: 'O continente mais antigo',
  };
  
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={1}
      navigation
      pagination
      cssMode
    >
      {slides.map(slide => {
        return (
          <SwiperSlide key={slide.title}>
            <Center
              position="relative"
              flexDir="column"
              h="450px"
              mb="8"
              overflow="hidden"
              w="100%"
            >
              <Image
                alt={`Continente da ${item.title}`}
                bgAttachment="fixed"
                bgSize="cover"
                bgRepeat="no-repeat"
                filter={'brightness(0.3)'}
                src={item.img}
              />
              <Link href={`/continent/${item.slug}`} passHref>
                <Center
                  flexDir="column"
                  position="absolute"
                  top="50%"
                  transform={['translateY(-50%)']}
                  transition={'filter 0.2s'}
                  _hover={{ filter: 'brightness(0.8)' }}
                >
                  <Text
                    color="gray.50"
                    fontSize={['2xl', '5xl']}
                    fontWeight="bold"
                  >
                    {item.title}
                  </Text>
                  <Text
                    color="gray.200"
                    fontWeight="medium"
                    fontSize={['sm', '2xl']}
                  >
                    {item.subtitle}
                  </Text>
                </Center>
              </Link>
            </Center>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};
