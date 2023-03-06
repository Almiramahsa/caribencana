import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import PublicationItem from './PublicationItem';
import DataItem from '../data/DataItem';
function StackEx() {
  return (
    <div className="container mx-auto px-4 ">
      <Stack spacing={8} direction="row">
        <Box p={5} borderWidth="1px" width={{ base: '100%', md: '30%' }}>
          <Heading fontSize="xl">Plan Money</Heading>
          <Text mt={4}>The future can be even brighter but a goal without a plan is just a wish</Text>
        </Box>
        <Box p={5} borderWidth="1px" width={{ base: '100%', md: '70%' }}>
          <Heading fontSize="xl">Save Money</Heading>
          <div>
            {DataItem.map((data) => (
              <PublicationItem id={data.id} publisher={data.publisher} title={data.title} authors={data.authors} description={data.description}></PublicationItem>
            ))}
          </div>
        </Box>
      </Stack>
    </div>
  );
}

export default StackEx;
