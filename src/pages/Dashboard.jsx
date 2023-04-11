import React, { useState } from "react";
import {
  Text,
  Heading,
  Flex,
  SimpleGrid,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

export default function Dashboard(todo) {
  return (
    <SimpleGrid spacing={10} templateColumns="repeat(2,1fr)">
      <Box border="2px solid" h="200px"></Box>
      <Box border="2px solid" h="200px"></Box>
      <Box border="2px solid" h="200px"></Box>
      <Box border="2px solid" h="200px"></Box>
    </SimpleGrid>
  );
}
