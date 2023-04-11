import React, { useToast } from "react";
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

export default function TaskCard({ todos, onRemove, onDone }) {
  return (
    <>
      {todos.map((todo) => (
        <Card key={todo.id} borderTop="8px" borderColor="purple.400" bg="white">
          <CardHeader>
            <Flex gap={5}>
              <Avatar src="/img/sonic.jfif" />
              <Box>
                <Heading as="h3" size="sm">
                  {todo.title}
                </Heading>
                <Text>by Saeid</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Text>{todo.description}</Text>
          </CardBody>
          <Divider color="gray.200" />
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>
                Watch
              </Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>
                Comment
              </Button>
              <Button variant="ghost" onClick={() => onRemove(todo.id)}>
                Delete
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
