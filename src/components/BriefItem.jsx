import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Text, Heading, SimpleGrid } from '@chakra-ui/react';

function BriefItem({ id, title, authors, publish, link }) {
  return (
    <div className="mx-20 my-20">
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(500px, 1fr))">
        <Card>
          <CardHeader>
            <Heading size="md">Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <div>
              <h1 className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-6 truncate">{title}</h1>
              <p className="text-gray-800 dark:text-gray-200 mb-5">{id}</p>
              <p className="text-gray-800 dark:text-gray-200 mb-5">{authors}</p>
              <p className="text-gray-800 dark:text-gray-200 mb-5">{publish}</p>
              <p className="text-gray-800 dark:text-gray-200 mb-5">{link}</p>
            </div>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default BriefItem;
