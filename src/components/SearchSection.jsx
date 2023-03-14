import { Box, Heading, Stack } from '@chakra-ui/react';
import FilterBar from './FilterBar'; // Import FilterBar
import PublicationItem from './PublicationItem';

function SearchSection({ children, searchResults }) {
  return (
    <Box p={10}>
      <Stack spacing={6}>
        <Heading as="h2" size="2xl">
          Disaster Data Catalogue
        </Heading>
        {children}
        <FilterBar />
        <Box p={10}>{searchResults ? searchResults.map((result) => <PublicationItem key={result.id} data={result} />) : null}</Box>
      </Stack>
    </Box>
  );
}
export default SearchSection;
