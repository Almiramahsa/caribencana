import React from 'react';
import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { Stack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Input, Select, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import DataItem from '../data/DataItem';
import { IdkuItem } from '../data/IdkuItem';
function FilterBar() {
  const provinces = [...new Set(DataItem.map((item) => item.name_adm1))];
  return (
    <div className="mt-10">
      <Accordion allowToggle>
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
              <Select placeholder="Research Article on IDKU Item" className="text-gray-800 ">
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
            <Input placeholder="Search keyword" />
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
            <Stack spacing={[2, 5]} direction={['column']}>
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
              <Select placeholder="Select Province">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FilterBar;
