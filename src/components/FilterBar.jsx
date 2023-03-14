import React, { useState } from 'react';
import { Box, Stack, Checkbox, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Accordion, CheckboxGroup, Button, Input, Select, FormControl, FormLabel } from '@chakra-ui/react';
import DataItem from '../data/DataItem';
import { IdkuItem } from '../data/IdkuItem';

function FilterBar({ setSearchResults }) {
  const provinces = [...new Set(DataItem.map((item) => item.name_adm1))];
  const [filterValue, setFilterValue] = useState('');
  const [disasterPhaseFilterValues, setDisasterPhaseFilterValues] = useState([]);
  const [keywordsFilterValue, setKeywordsFilterValue] = useState('');
  const [provinceFilterValue, setProvinceFilterValue] = useState('');
  const [hazardFilterValue, setHazardFilterValue] = useState('');
  const [idkuFilterValue, setIdkuFilterValue] = useState('');

  function handleFilterChange(event) {
    switch (event.target.name) {
      case 'disasterPhase':
        setDisasterPhaseFilterValues(event.target.value);
        break;
      case 'keywords':
        setKeywordsFilterValue(event.target.value);
        break;
      case 'province':
        setProvinceFilterValue(event.target.value);
        break;
      case 'hazard':
        setHazardFilterValue(event.target.value);
        break;
      case 'idku':
        setIdkuFilterValue(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleDisasterPhaseChange(values) {
    setDisasterPhaseFilterValues(values);
  }

  function handleFilterSubmit(event) {
    event.preventDefault();
    const selectedFilters = {
      keywords: keywordsFilterValue,
      disasterPhase: [],
      province: provinceFilterValue,
      hazard: hazardFilterValue,
    };

    const selectedDisasterPhases = document.querySelectorAll('input[name="disasterPhase"]:checked');
    selectedDisasterPhases.forEach((phase) => {
      selectedFilters.disasterPhase.push(phase.value);
    });

    const filteredData = DataItem.filter((item) => {
      const matchesKeyword = item.title.toLowerCase().includes(selectedFilters.keywords.toLowerCase());
      const matchesProvince = item.name_adm1 === selectedFilters.province || selectedFilters.province === '';
      const matchesHazard = item.hazard === selectedFilters.hazard || selectedFilters.hazard === '';
      const matchesDisasterPhase = selectedFilters.disasterPhase.length === 0 || selectedFilters.disasterPhase.some((phase) => item.disasterPhase.includes(phase));

      return matchesKeyword && matchesProvince && matchesHazard && matchesDisasterPhase;
    });

    const filteredIdku = IdkuItem.filter((data) => {
      const matchesIdku = data.IDKU === idkuFilterValue || idkuFilterValue === '';

      return matchesIdku;
    });

    setSearchResults(filteredData);
  }

  return (
    <Box>
      <form onSubmit={handleFilterSubmit}>
        <Stack spacing={6}>
          <FormControl>
            <Select placeholder="Research Article on IDKU Item" className="text-gray-800 " value={filterValue} onChange={handleFilterChange}>
              {IdkuItem.map((item, index) => (
                <option key={index} value={item.id} className="text-gray-900 font-normal hover:bg-orange-500 focus:bg-orange-500">
                  {item.id}-{item.title}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="keywords">
            <FormLabel>Keywords</FormLabel>
            <Input name="keywords" value={keywordsFilterValue} onChange={handleFilterChange} placeholder="Enter keywords" />
          </FormControl>

          <FormControl id="province">
            <FormLabel>Province</FormLabel>
            <Select name="province" value={provinceFilterValue} onChange={handleFilterChange} placeholder="Select province">
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="hazard">
            <FormLabel>Hazard</FormLabel>
            <Select name="hazard" value={hazardFilterValue} onChange={handleFilterChange} placeholder="Select hazard">
              <option value="">All hazards</option>
              <option value="earthquake">Earthquake</option>
              <option value="flood">Flood</option>
              <option value="landslide">Landslide</option>
            </Select>
          </FormControl>

          <Accordion allowMultiple>
            <Box as="span" flex="1" textAlign="left" className="font-semibold text-md" mb={2}>
              Disaster Phase
            </Box>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" className="font-normal text-md">
                    Select Disaster Phase
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <CheckboxGroup value={disasterPhaseFilterValues} onChange={handleDisasterPhaseChange}>
                  <Stack direction="column">
                    <Checkbox value="preparation">Preparation</Checkbox>
                    <Checkbox value="response">Response</Checkbox>
                    <Checkbox value="recovery">Recovery</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <button type="submit" className="h-12 w-36 bg-orange-500 mt-10 mx-auto text-white rounded-full  hover:bg-orange-400 ">
            Apply Filter
          </button>
        </Stack>
      </form>
    </Box>
  );
}

export default FilterBar;
