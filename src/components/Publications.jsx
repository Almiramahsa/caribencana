import React, { useEffect, useState } from 'react';
import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import PublicationItem from './PublicationItem';
import DataItem from '../data/DataItem';

function Publications() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = DataItem.slice(firstIndex, lastIndex);
  const npage = Math.ceil(DataItem.length / recordsPerPage) / 2;
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="container mx-auto px-4 mt-0.5">
      <Stack spacing={8} direction={{ base: 'column', sm: 'column', md: 'row' }} flexWrap={{ base: 'wrap', sm: 'wrap', md: 'nowrap' }}>
        <Box p={5} borderWidth="1px" width={{ base: '100%', md: '30%' }} flex="1">
          <Heading fontSize="xl">Filter</Heading>
        </Box>
        <Box p={5} borderWidth="1px" width={{ base: '100%', md: '70%' }} flex="2">
          <Heading fontSize="xl">List of Research Articles</Heading>
          <div className="flex flex-col">
            <ul className="flex justify-center">
              <li>
                <a className={`relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ${isActive ? 'active bg-gray-200' : ''}`} onClick={prevPage}>
                  Prev
                </a>
              </li>
              {numbers.map((n, i) => (
                <li className={`${currentPage === n ? 'active' : ''}`} keys={i}>
                  <a className={`relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ${isActive ? 'active bg-gray-500' : ''}`} onClick={() => changeCPage(n)}>
                    {n}
                  </a>
                </li>
              ))}
              <li>
                <a className={`relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 ${isActive ? 'active' : ''}`} onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </div>
          <div>
            {records.map((data) => (
              <PublicationItem id={data.id} publisher={data.publisher} title={data.title} authors={data.authors} description={data.description} />
            ))}
          </div>
        </Box>
      </Stack>
    </div>
  );
}

export default Publications;
