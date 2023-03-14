import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { IdkuItem } from '../data/IdkuItem';
import bgIdku1 from '../assets/idku-1.png';
import bgIdku2 from '../assets/idku-2.png';
import bgIdku3 from '../assets/idku-3.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Briefs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const properties = {
    duration: 4000,
    transitionDuration: 500,
    indicators: true,
  };
  return (
    <div className="mx-20 my-20">
      {isLoading ? (
        <div className="flex h-screen">
          <div className="m-auto">Loading...</div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4  mx-4">
            <Slide {...properties}>
              <div className="slide">
                <img src={bgIdku1} alt="idku caribencana" className="hover:scale-150 w-full md:h-full object-cover" />
              </div>
              <div className="slide">
                <img src={bgIdku2} alt="idku caribencana" className="hover:scale-150 w-full md:h-full object-cover" />
              </div>
              <div className="slide">
                <img src={bgIdku3} alt="idku caribencana" className="hover:scale-150 w-full md:h-full object-cover" />
              </div>
            </Slide>
            <div className="mx-auto md:mt-0 mt-8">
              <h1 className="text-4xl font-bold text-orange-500 mb-4 mt-5">
                <span className="text-gray-500 font-normal">Special </span>Brief
              </h1>
              <p className="text-gray-700 text-normal mb-6">The special brief is one of the knowledge products produced by CARI! to provide an overview of the knowledge landscape based on certain themes and other major events.</p>
            </div>
          </div>

          <SimpleGrid className="mt-4" spacing={[2, 4, 6]} columns={[1, 2, 3]}>
            {IdkuItem.map((idku) => (
              <Card key={idku.id}>
                <CardBody className="hover:text-orange-500">
                  <Text fontSize="xl" fontWeight="semibold" mb="2">
                    {idku.id} - {idku.title}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {idku.publish}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {idku.authors}
                  </Text>
                </CardBody>
                <CardFooter>
                  <a href={idku.link} target="_blank" rel="noopener noreferrer">
                    <button className="h-12 w-36 bg-orange-500 mt-10 mx-auto text-white rounded-full  hover:bg-orange-400 ">View Here</button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </div>
      )}
    </div>
  );
}

export default Briefs;
