import React from 'react';
import {
  Box, Heading, VStack, Text, Link,
} from '@chakra-ui/react';
import TileCard from '../../components/TileCard';

const LandingPage: React.FC = () => (
  <Box
    textAlign="center"
    fontSize="xl"
  >
    <VStack
      spacing={15}
      pt={{ base: '20', md: '24' }}
    >
      <Box
        as="header"
        p={5}
      >
        <Heading fontSize="3rem">
          String Sorter
        </Heading>
      </Box>
      <TileCard />
      <Text
        fontSize="13px"
      >
        This application was created by Johnathan Tam. Click
        {' '}
        <Link
          href="https://johnathantam.com/"
          isExternal
          color="red.400"
          textDecoration="underline"
        >
          here
        </Link>
        {' '}
        to learn more about him.
      </Text>
    </VStack>
  </Box>
);

export default LandingPage;
