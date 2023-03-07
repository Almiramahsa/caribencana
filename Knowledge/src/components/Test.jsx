import React from 'react';
import { IdkuItem } from '../data/IdkuItem';
import { SimpleGrid, Card, Text, CardBody, CardFooter } from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
function Test() {
  return (
    <>
      <div className="mx-20 my-20">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Special Brief Repository</h1>
          <p className="text-md font-base mb-4">The special brief is one of the knowledge products produced by CARI! to provide an overview of the knowledge landscape based on certain themes and other major events.</p>
        </div>
        <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
          {IdkuItem.map((item) => (
            <Card key={item.id} my={5}>
              <CardBody>
                <Text>
                  <h2 className="text-lg font-semibold mb-4">
                    {item.id} - {item.title}
                  </h2>

                  <p className="mb-3">{item.publish}</p>

                  <div className="inline-flex items-center gap-4">
                    <BsPerson w={20} className="font-bold" />
                    <span className="text-md font-bold">authors :</span>
                  </div>
                  <p className="text-md font-base">{item.authors}</p>
                </Text>
              </CardBody>
              <CardFooter>
                <a href={item.link}>Read More</a>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}
export default Test;
