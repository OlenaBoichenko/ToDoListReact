import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('adds and removes a todo', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText('New task');
  const button = screen.getByText('Add');

  await act(async () => {
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);
  });

  const todos = screen.getAllByText('Test Todo');
  expect(todos.length).toBeGreaterThan(0);

  await act(async () => {
  fireEvent.click(screen.getAllByLabelText('Delete todo')[0]);
  });

  expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
});

test('marks a todo as completed and then uncompleted', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText('New task');
  const button = screen.getByText('Add');

  await act(async () => {
  fireEvent.change(input, { target: { value: 'Complete Me' } });
  fireEvent.click(button);
  });

  const checkbox = screen.getAllByRole('checkbox')[0];

  await act(async () => {
  fireEvent.click(checkbox);
  });

  expect(checkbox).toBeChecked(); 

  await act(async () => {
  fireEvent.click(checkbox);
  });

  expect(checkbox).not.toBeChecked(); 
});
