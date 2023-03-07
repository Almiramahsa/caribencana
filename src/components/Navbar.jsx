import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { Button, Flex, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '/src/assets/cari-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box top={'0'} zIndex={'10'}>
      <NavBarContainer>
        <Link to="/home">
          <img height="75px" width="100px" objectFit="contain" src={logo} alt="Logo Caribencana.id" />
        </Link>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} isActive="special brief" />
      </NavBarContainer>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const MenuLinks = ({ isOpen, isActive }) => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }} bg={{ base: 'white' }} borderRadius="20" py={{ base: '6' }}>
      <Stack spacing={8} align="center" justify={['center', 'center', 'flex-end', 'flex-end']} direction={['column', 'column', 'row', 'row']} pt={[4, 4, 0, 0]} color="#CDD1E0">
        <Link to="/home">
          <Text color={isActive === 'home' ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Home
          </Text>
        </Link>
        <Link to="/knowledge-portal">
          <Text color={isActive === 'knowledge portal' ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Knowledge Portal
          </Text>
        </Link>
        <Link to="#">
          <Text color={isActive === 'publications' ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Publications
          </Text>
        </Link>
        <Link to="#">
          <Text color={isActive === 'special brief' ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Special Brief
          </Text>
        </Link>
        <Link to="#">
          <Text color={isActive === 'about' ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            About
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={{ base: 0, md: 8 }} py={{ base: 0, md: 3 }} px={20} bg="white" {...props} height={{ base: '0', md: 'auto' }} zIndex="100">
      {children}
    </Flex>
  );
};

export default Navbar;
