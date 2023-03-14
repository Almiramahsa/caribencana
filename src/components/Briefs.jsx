import React, { useState, useEffect } from 'react';
import { Link, Card, CardHeader, CardBody, CardFooter, Button, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { IdkuItem } from '../data/IdkuItem';
import bgIdku1 from '../assets/idku-1.png';
import bgIdku2 from '../assets/idku-2.png';
import bgIdku3 from '../assets/idku-3.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Briefs() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: !isMobile,
    arrows: !isMobile,
  };

  return (
    <div className="mx-20 my-20">
      {isLoading ? (
        <div className="flex h-screen">
          <div className="m-auto">Loading...</div>
        </div>
      ) : (
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4 mx-4">
            <Slide {...properties} prevArrow={null} nextArrow={null} style={{ width: '80%', margin: '0 auto' }}>
              <div className="slide  hidden md:block">
                <img src={bgIdku1} alt="idku caribencana" className="hover:scale-150 w-full md:h-full object-cover md:" />
              </div>
              <div className="slide hidden md:block">
                <img src={bgIdku2} alt="idku caribencana" className="hover:scale-150 w-full md:h-full object-cover" />
              </div>
              <div className="slide hidden md:block">
                <img src={bgIdku3} alt="idku caribencana" className="hover:scale-150 w-full md:h-full object-cover" />
              </div>
            </Slide>
            <div className="mx-auto md:mt-0 mt-8">
              <h1 className="text-4xl font-bold text-orange-500 mb-4 mt-5">
                <span className="text-gray-500 font-normal">Special </span>Brief
              </h1>
              <p className="text-gray-700 text-normal mb-6 sm:w-full">The special brief is one of the knowledge products produced by CARI! to provide an overview of the knowledge landscape based on certain themes and other major events.</p>
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
                    Published : <span>{idku.publish}</span>
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {idku.authors && idku.authors.length > 50 ? (
                      <>
                        {showMore ? idku.authors : idku.authors.slice(0, 50) + '...'}
                        <Link size="sm" onClick={() => setShowMore(!showMore)} className="text-orange-500 mx-4">
                          {showMore ? 'Show less' : 'Read more'}
                        </Link>
                      </>
                    ) : (
                      idku.authors
                    )}
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
