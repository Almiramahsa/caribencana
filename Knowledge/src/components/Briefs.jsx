import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { IdkuItem } from '../data/IdkuItem';
import BriefItem from './BriefItem';

function Briefs() {
  console.log(IdkuItem);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-20 my-20">
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(500px, 1fr))">
        <Card>
          <CardHeader>
            <Heading size="md">Special Brief</Heading>
          </CardHeader>
          <CardBody>
            <div>
              {IdkuItem.map((idku) => (
                <BriefItem key={idku.id} id={idku.id} title={idku.title} authors={idku.authors} publish={idku.publish} link={idku.link} />
              ))}
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

export default Briefs;
