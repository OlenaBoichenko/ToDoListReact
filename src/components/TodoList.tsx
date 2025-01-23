import React from 'react';
import { List as ChakraList, ListItem, Checkbox, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Todo } from '../App';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    console.log('Todos:', todos);
    return (
    <ChakraList spacing={3} w="100%">
      {todos.map(todo => (
        <ListItem key={todo.id} display="flex" alignItems="center" justifyContent="space-between">
          <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(todo.id)}>
            {todo.text}
          </Checkbox>
          <IconButton aria-label="Delete todo" icon={<DeleteIcon />} colorScheme="red" onClick={() => deleteTodo(todo.id)} />
        </ListItem>
      ))}
    </ChakraList>
    
  );
};

export default TodoList;