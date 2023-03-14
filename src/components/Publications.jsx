import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import DataItem from '../data/DataItem';
import { useState } from 'react';
import PublicationItem from './PublicationItem';
import { StackItem, Stack, Box, Heading } from '@chakra-ui/react';
import FilterBar from './FilterBar';
function Publications() {
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

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <motion.div variants={paginationVariants} initial="hidden" animate="visible">
      <Stack spacing={8} direction={{ base: 'column', sm: 'column', md: 'row' }} flexWrap={{ base: 'wrap', sm: 'wrap', md: 'nowrap' }} className="mx-5 mt-5 ">
        <Box p={5} borderWidth="1px" width={{ base: '100%', md: '30%' }} flex="1" borderRadius="md">
          <h2 className="font-bold text-xl mb-10">Filter</h2>
          <FilterBar setSearchResults={handleSearch} />
        </Box>

        <Box p={5} width={{ base: '100%', md: '70%' }} flex="2" borderRadius="md">
          <Heading fontSize="xl">List of Research Articles</Heading>

          <ReactPaginate
            breakClassName={'flex items-center justify-center w-10 h-10 mb-5'}
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
            <PublicationItem
              key={data.id}
              id={data.id}
              publisher={data.publisher}
              title={data.title}
              authors={data.authors}
              abstract={data.abstract}
              doi={data.doi}
              source={data.link}
              name_adm1={data.name_adm1}
              name_dmf_sub={data.name_dmf_sub}
            />
          ))}
        </Box>
      </Stack>
    </motion.div>
  );
}

export default Publications;
