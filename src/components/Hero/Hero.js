import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Hero() {
  return (
    <>
      <Container maxW={'3xl'} 
px={{lg: "4rem", md: "1.5rem", sm: "1rem"}}      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
          as={"h1"}
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            letterSpacing={'-2px'}
            >
        
            <Text as={'span'} color={'blue.600'} fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}>
              MockLand {" "} 
            </Text>
             Free fake API for testing .
          </Heading>
          <Text color={'gray.500'} fontSize={'xl'}  >
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'row'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'blue'}
              bg={'blue.600'}
              rounded={'5px'}
         paddingInline={"45px"}
         py={7}
              
              _hover={{
                bg: 'blue.700',
              }}>
              Get Started
            </Button>
            <Button
              colorScheme={'gray'}
              bg={'gray.100'}
              rounded={'5px'}
         paddingInline={"45px"}
         py={7}
         rightIcon={<ArrowForwardIcon />}
              
              _hover={{
                bg: 'blue.700',
              }}>
          GitHub
            </Button>
            
  

          </Stack>
        </Stack>
      </Container>
    </>
  );
}

