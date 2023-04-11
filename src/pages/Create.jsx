import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

export default function Create() {
  const [todos, setTodos] = useState([]);
  const [taskId, setTaskId] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const toast = useToast();

  // Add New Task
  const addHandler = async (event) => {
    event.preventDefault();

    let newTodoObj = {
      id: taskId,
      title: todoTitle,
      description: todoDescription,
    };

    fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoObj),
    }).then((res) => {
      if (res.status === 201) {
        toast({
          title: "Submited",
          description: "Successfyly Submitted",
          duration: 2000,
          isClosable: true,
          status: "success",
          position: "top",
          icon: <CheckIcon />,
        });
      }

      getAllTasks();
    });

    setTodos((prevState) => {
      return [...prevState, newTodoObj];
    });

    setTodoTitle("");
    setTodoDescription("");
  };

  const titleHandler = (event) => {
    setTodoTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setTodoDescription(event.target.value);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  // Get Tasks From db.json
  const getAllTasks = () => {
    fetch("http://localhost:4000/tasks")
      .then((res) => res.json())
      .then((datas) => setTodos(datas));
  };

  //Task Remove
  const taskRemoveHandler = (id) => {
    fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Tasks Remove Successfully!!!",
          duration: 2000,
          isClosable: true,
          status: "success",
          position: "top",
          icon: <DeleteIcon />,
        });
        getAllTasks();
      }
    });
  };

  return (
    <Box>
      <form onSubmit={addHandler} method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task Title: </FormLabel>
          <Input
            type="text"
            name="title"
            value={todoTitle}
            onChange={titleHandler}
          />
          <FormHelperText>Enter a task title.</FormHelperText>
        </FormControl>
        <FormControl isRequired mb="40px">
          <FormLabel>Task Description: </FormLabel>
          <Textarea
            value={todoDescription}
            onChange={descriptionHandler}
            name="description"
          />
          <FormHelperText>
            Enter a detailed description for the task....
          </FormHelperText>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>

      <SimpleGrid my={10} spacing={10} minChildWidth="300px">
        <TaskCard todos={todos} onRemove={taskRemoveHandler} />
      </SimpleGrid>
    </Box>
  );
}
