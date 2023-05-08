import { EmailIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Center,
    chakra,
    Container,
    Flex,
    HStack,
    IconButton,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    VStack,
  } from '@chakra-ui/react';
  import { FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

   

  

  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
              <Flex p={10} bg={'blue.600'} width={'full'}> 
              <Container as ={'flex'} direction={'row'} justifyContent={'space-between'} maxW={'7xl'} >

    <Flex  direction={'row'} justifyContent={'space-between'}>
        <Flex direction={'row'} alignItems={'center'}  columnGap={2}>
            <FaDiscord fontSize={'60px'} color='white'/>
             <Flex direction={'column'}>
             <Text color={'white'} fontSize={'xl'}>Connect with the community</Text>
          <Text color={'white'} >Feel free to ask questions, report issues, and meet new people</Text>
             </Flex>
      
       
        </Flex>
     

   
    <Box>
            <Button fontWeight={'bold'} py={7} px={8}>Join the #Persianjs Discord!</Button>
            </Box>
    </Flex>
    </Container>
   </Flex>
        <Container
         as={Stack}
sx={{
          maxW:'6xl',
          py:4,
          spacing:1,
          justify:'center',
         alignItems:'center'
}}

       >
   
 

   
          <Stack direction={'row'} spacing={6}>
        <Text color={'gray.900'}>Proudly made in by PersianJs</Text>
          </Stack>
          <Box>
          <Container
            as={Stack}
            maxW={'6xl'}
          
            my={1}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
          
            <Center  columnGap={'20px'} p={1}>
<Link><FaGithub color='var(--chakra-colors-gray-400)' fontSize={"20px"}  /></Link>

<Link><FaDiscord color='var(--chakra-colors-gray-400)' fontSize={"20px"} /></Link>

<Link><FaYoutube color='var(--chakra-colors-gray-400)' fontSize={"20px"} /></Link>

            </Center>
          </Container>
        </Box>

        </Container>
  

      </Box>
    );
  }