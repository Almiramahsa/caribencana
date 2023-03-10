import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { transition } from '@chakra-ui/react';
import DataItem from '../data/DataItem';
import { useState } from 'react';
import PublicationItem from './PublicationItem';
import { Stack, Box, Heading } from '@chakra-ui/react';
import FilterBar from './FilterBar';

function Test() {
  const [currentPage, setCurrentPage] = useState(0);
  const recordsPerPage = 3;
  const lastIndex = (currentPage + 1) * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = DataItem.slice(firstIndex, lastIndex);

  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <motion.div variants={paginationVariants} initial="hidden" animate="visible">
      <Stack spacing={8} direction={{ base: 'column', sm: 'column', md: 'row' }} flexWrap={{ base: 'wrap', sm: 'wrap', md: 'nowrap' }}>
        <Box p={5} borderWidth="1px" width={{ base: '100%', md: '30%' }} flex="1">
          <Heading fontSize="xl">Filter</Heading>
          <FilterBar />
        </Box>
        <Box p={5} borderWidth="1px" width={{ base: '100%', md: '70%' }} flex="2">
          <Heading fontSize="xl">List of Research Articles</Heading>
          <ReactPaginate
            breakClassName={'flex items-center justify-center w-10 h-10'}
            breakLabel={'...'}
            nextLabel={
              <span className="w-10 h-10 flex items-center justify-center border border-orange-400 rounded-md">
                <BsChevronRight />
              </span>
            }
            pageClassName={'block hover:bg-orange-100 w-10 h-10 flex items-center justify-center rounded-md mr-4'}
            pageCount={Math.ceil(DataItem.length / recordsPerPage)}
            previousLabel={
              <span className="w-10 h-10 flex items-center justify-center border border-orange-400 rounded-md mr-4">
                <BsChevronLeft />
              </span>
            }
            containerClassName={'flex flex-wrap justify-center mt-8 mb-4'}
            activeClassName={'border border-orange-400'}
            onPageChange={handlePageClick}
          />
          {records.map((data) => (
            <PublicationItem key={data.id} id={data.id} publisher={data.publisher} title={data.title} authors={data.authors} description={data.description} />
          ))}
        </Box>
      </Stack>
    </motion.div>
  );
}

export default Test;
