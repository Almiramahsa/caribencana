import React from 'react';
import { useState } from 'react';
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { Stack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Button, Input, Select, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import DataItem from '../data/DataItem';
import { IdkuItem } from '../data/IdkuItem';

function FilterBar() {
  const provinces = [...new Set(DataItem.map((item) => item.name_adm1))];
  const [filterValue, setFilterValue] = useState('');

  function handleFilterChange(event) {
    setFilterValue(event.target.value);
  }
  function handleFilterSubmit(event) {
    event.preventDefault();
    const selectedFilters = {
      keywords: filterValue,
      disasterPhase: [],
      province: filterValue,
      hazard: filterValue,
    };

    const selectedDisasterPhases = document.querySelectorAll('input[name="disasterPhase"]:checked');
    selectedDisasterPhases.forEach((phase) => {
      selectedFilters.disasterPhase.push(phase.value);
    });

    console.log(selectedFilters);
  }

  return (
    <div className="mt-10">
      <Accordion allowToggle>
        <form onSubmit={handleFilterSubmit}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="font-semibold text-lg ">
                  Research Article on IDKU
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FormControl>
                <Select placeholder="Research Article on IDKU Item" className="text-gray-800 " value={filterValue} onChange={handleFilterChange}>
                  {IdkuItem.map((item, index) => (
                    <option key={index} value={item.id} className="text-gray-900 font-semibold hover:bg-orange-500 focus:bg-orange-500">
                      {item.id}-{item.title}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="font-semibold text-lg">
                  Keywords
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Input value={filterValue} onChange={handleFilterChange} placeholder="Search keyword" />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="font-semibold text-lg">
                  Disaster Phase
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={[2, 5]} direction={['column']} value={filterValue} onChange={handleFilterChange}>
                <Checkbox size="md" borderColor="orange.500" colorScheme="orange">
                  Prevention & Mitigation
                </Checkbox>
                <Checkbox size="md" borderColor="orange.500" colorScheme="orange">
                  Preparedness
                </Checkbox>
                <Checkbox size="md" borderColor="orange.500" colorScheme="orange">
                  Response
                </Checkbox>
                <Checkbox size="md" borderColor="orange.500" colorScheme="orange">
                  Recovery
                </Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="font-semibold text-lg">
                  Filter By Province
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FormControl>
                <Select placeholder="Select Province" value={filterValue} onChange={handleFilterChange}>
                  {provinces.map((province, index) => (
                    <option key={index}>{province}</option>
                  ))}
                </Select>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="font-semibold text-lg">
                  Filter By Hazard
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FormControl>
                <Select placeholder="Filter By Hazards" value={filterValue} onChange={handleFilterChange}>
                  <option>Landslide</option>
                  <option>Earthquake</option>
                  <option>Tsunami</option>
                  <option>Flood</option>
                  <option>Volcano</option>
                  <option>Liquefaction</option>
                  <option>Extreme Weather</option>
                </Select>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
          <button className="h-12 w-36 bg-orange-500 mt-10 mx-auto text-white rounded-full   hover:bg-orange-400 hover:text-white focus:outline-none">Apply Filter</button>
        </form>
      </Accordion>
    </div>
  );
}

export default FilterBar;
