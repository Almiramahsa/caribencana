import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Stack } from '@chakra-ui/layout';
import { Button, Flex, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import logo from '/src/assets/cari-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();

  return (
    <Box top={'0'} zIndex={'10'}>
      <NavBarContainer>
        <a href="https://caribencana.id" target="_blank">
          <img height="75px" width="100px" objectFit="contain" src={logo} alt="Logo Caribencana.id" />
        </a>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} location={location} />
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

const MenuLinks = ({ isOpen, location }) => {
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }} bg={{ base: 'white' }} borderRadius="20" py={{ base: '6' }}>
      <Stack spacing={8} align="center" justify={['center', 'center', 'flex-end', 'flex-end']} direction={['column', 'column', 'row', 'row']} pt={[4, 4, 0, 0]} color="#CDD1E0">
        <a href="/">
          <Text color={isActive('/') ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Home
          </Text>
        </a>
        <a href="/">
          <Text color={isActive('/knowledge') ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Knowledge Portal
          </Text>
        </a>
        <a href="#">
          <Text color={isActive('/publications') ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Publications
          </Text>
        </a>
        <a href="/special-brief">
          <Text color={isActive('/special-brief') ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            Special Brief
          </Text>
        </a>
        <a href="/about">
          <Text color={isActive('/about') ? 'orange' : undefined} _hover={{ color: 'orange' }}>
            About
          </Text>
        </a>
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
