import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Stack } from '@chakra-ui/react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const { register, handleSubmit, reset } = useForm<{ text: string }>();

  const onSubmit = (data: { text: string }) => {
    addTodo(data.text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" mb={4}>
        <Input placeholder="New task" {...register('text', { required: true })} />
        <Button type="submit" colorScheme="teal">Add</Button>
      </Stack>
    </form>
  );
};

export default AddTodo;