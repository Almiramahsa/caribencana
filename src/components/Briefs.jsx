import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { IdkuItem } from '../data/IdkuItem';

function Briefs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="mx-20 my-20">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="font-bold text-3xl hover:text-orange-500">Special Brief</h1>
          <h1 className="font-normal text-2xl mt-2 text-gray-400 mb-20 hover:text-orange-500">
            The special brief is one of the knowledge products produced by CARI! to provide an overview of the knowledge landscape based on certain themes and other major events.
          </h1>

          <SimpleGrid className="mt-4" spacing={[2, 4, 6]} columns={[1, 2, 3]}>
            {IdkuItem.map((idku) => (
              <Card key={idku.id}>
                <CardBody>
                  <Text fontSize="xl" fontWeight="semibold" mb="2">
                    {idku.title}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {idku.authors}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {idku.publish}
                  </Text>
                </CardBody>
                <CardFooter>
                  <a href={idku.link} target="_blank" rel="noopener noreferrer">
                    <Button>View here</Button>
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
