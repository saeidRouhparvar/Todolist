import { LockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfyly Logged out",
      duration: 4000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <LockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
      <Heading as="h1" fontSize={{base: '20px'}} pt={{base:'10px'}}>Saeid Tasks</Heading>
      <Spacer />

      <HStack spacing="20px" display='flex' >
        <Avatar src="/img/sonic.jfif">
          <AvatarBadge w='1.3em' bg='teal.500'>
            <Text fontSize='xs' color='white'>3</Text>
          </AvatarBadge>
        </Avatar>
        <Button colorScheme="purple">
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
