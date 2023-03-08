import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function PublicationItem({ id, title, authors, doi, publisher, year, lang, hazard, name_adm1, name_dmf_sub, link, abstract }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [copied, setCopied] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const maxLength = 150;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  const handleModalClose = () => {
    setCopied(false);
    setShowMore(false);
    onClose();
  };

  const abstractContent = showMore ? abstract : `${abstract.slice(0, maxLength)}...`;

  return (
    <div className="px-5">
      <div className="border sm:mt-10 hover:-translate-y-2 p-5 transition transform rounded-md">
        <h1 className="text-gray-800 text-lg font-bold leading-6 truncate">{title}</h1>
        <h1 className="text-gray-800 text-lg font-bold leading-6 truncate">{id}</h1>
        <p className="text-gray-800 mb-5">{authors}</p>
        <p className="text-gray-800 mb-5">{doi}</p>
        <p className="text-gray-800 mb-5">{publisher}</p>
        <p className="text-gray-800 mb-5">{year}</p>
        <p className="text-gray-800 mb-5">{lang}</p>
        <div>
          <button
            className="h-12 w-36 bg-orange-500 mt-5 mx-auto text-white rounded-md   hover:bg-orange-400 hover:text-white focus:outline-none"
            onClick={() => {
              onOpen();
              setCopied(false);
            }}
            colorScheme="orange"
            variant="outline"
          >
            Details
          </button>

          <Modal size="3xl" isOpen={isOpen} onClose={handleModalClose} onExited={() => setCopied(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="mt-10 ">{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>
                  <strong>Authors:</strong> {authors}
                </p>

                <p>
                  {abstractContent}
                  {abstract.length > 100 && (
                    <Link size="sm" onClick={() => setShowMore(!showMore)} className="text-orange-500 mx-4">
                      {showMore ? 'Show less' : 'Read more'}
                    </Link>
                  )}
                </p>

                <div className="flex flex-row items-center mt-10 gap-2  w-full">
                  <div className="border bordered-md rounded-md px-4 py-4">
                    <strong>DOI: </strong>
                    <p>{doi}</p>
                  </div>

                  <div className="border bordered-md rounded-md px-4 py-4">
                    <strong>Journal: </strong>
                    <p>{publisher}</p>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <CopyToClipboard text={link || ''} onCopy={handleCopyLink}>
                  <Link to={link || '#'}>
                    <button className="h-12 w-36 bg-orange-500 mt-10 mx-auto text-white rounded-md   hover:bg-orange-400 hover:text-white focus:outline-none">Sources</button>
                  </Link>
                </CopyToClipboard>
                {copied && <span className="text-green-600 ml-2">Copied!</span>}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default PublicationItem;
