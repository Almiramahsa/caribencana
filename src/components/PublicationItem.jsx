import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { HiOutlineLink } from '@react-icons/all-files/Hi/HiOutlineLink';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function PublicationItem({ id, title, authors, doi, publisher, year, lang, hazard, name_adm1, name_dmf_sub, link }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  const handleModalClose = () => {
    setCopied(false);
    onClose();
  };

  return (
    <div className="px-5">
      <div className="border sm:mt-10 hover:-translate-y-2 p-5 transition transform rounded-md">
        <h1 className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-6 truncate">{title}</h1>
        <h1 className="text-gray-800 dark:text-gray-200 text-lg font-bold leading-6 truncate">{id}</h1>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{authors}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{doi}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{publisher}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{year}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-5">{lang}</p>
        <div>
          <Button
            onClick={() => {
              onOpen();
              setCopied(false);
            }}
            colorScheme="orange"
            variant="outline"
          >
            Details
          </Button>

          <Modal isOpen={isOpen} onClose={handleModalClose} onExited={() => setCopied(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>Tes</ModalBody>

              <ModalFooter>
                <CopyToClipboard text={link || ''} onCopy={handleCopyLink}>
                  <Link to={link || '#'}>
                    <Button variant="outline">
                      <HiOutlineLink />
                      <span className="ml-2">Sources</span>
                    </Button>
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
