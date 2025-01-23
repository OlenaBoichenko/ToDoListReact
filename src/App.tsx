import React, { useState } from 'react';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ChakraProvider>
      <Container centerContent p={4}>
        <Heading mb={4}>ToDo List</Heading>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </Container>
    </ChakraProvider>
  );
};

export default App;