import React from 'react';
import { List as ChakraList, ListItem, Checkbox, IconButton, Box, Heading } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Todo } from '../App';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  const renderTodoList = (title: string, list: Todo[]) => (
    <Box mb={4}>
      <Heading size="md" mb={2}>{title}</Heading>
      <ChakraList spacing={3} w="100%">
        {list.map(todo => (
          <ListItem key={todo.id} display="flex" alignItems="center" justifyContent="space-between">
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(todo.id)}>
              {todo.text}
            </Checkbox>
            <IconButton aria-label="Delete todo" icon={<DeleteIcon />} colorScheme="red" onClick={() => deleteTodo(todo.id)} />
          </ListItem>
        ))}
      </ChakraList>
    </Box>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', maxWidth: '100%', maxHeight: '100%' }}>
      {renderTodoList('All Tasks', todos)}
      {renderTodoList('Incomplete Tasks', incompleteTodos)}
      {renderTodoList('Completed Tasks', completedTodos)}
    </div>
  );
};

export default TodoList;
