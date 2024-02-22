import React, { useState } from 'react';
import {
  Box, Input, Button, Text,
} from '@chakra-ui/react';
import { orderString } from '../../utils/stringUtils';

const TileCard: React.FC = () => {
  const [inputString, setInputString] = useState('');
  const [customAlphabet, setCustomAlphabet] = useState('');
  const [output, setOutput] = useState('');

  const handleSort = () => {
    try {
      const result = orderString(inputString, customAlphabet);
      setOutput(result);
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error! ${error.message}`);
      } else {
        setOutput('An unknown error occurred.');
      }
    }
  };

  const handleClear = () => {
    setOutput('');
    setCustomAlphabet('');
    setInputString('');
  };

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      maxWidth="500px"
      margin="auto"
    >
      <Input
        mb={2}
        placeholder="Input String"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        _focus={{
          boxShadow: '0 0 0 1px rgba(60, 153, 225, 0.6)',
          borderColor: 'teal.500',
        }}
      />
      <Input
        mb={4}
        placeholder="Custom Alphabet (optional)"
        value={customAlphabet}
        onChange={(e) => setCustomAlphabet(e.target.value)}
        _focus={{
          boxShadow: '0 0 0 1px rgba(66, 153, 225, 0.6)',
          borderColor: 'teal.500',
        }}
      />
      <Button
        onClick={handleSort}
        colorScheme="blue"
        mb={4}
        mr={4}
        borderRadius="full"
        bg="red.400"
        _hover={{ bg: 'red.600' }}
        width="100px"
      >
        Sort
      </Button>
      <Button
        onClick={handleClear}
        colorScheme="red"
        mb={4}
        borderRadius="full"
        borderColor="red.400"
        bg="white"
        variant="outline"
        borderWidth="2px"
        width="100px"
      >
        Clear
      </Button>
      <Text>
        Output:
        {' '}
        {output}
      </Text>
    </Box>
  );
};

export default TileCard;
