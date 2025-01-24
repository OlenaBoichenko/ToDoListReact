import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';

test('adds and removes a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('New task');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(button);
  expect(screen.getByText('Test Todo')).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText('Delete todo'));
  expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
});

test('marks a todo as completed and then uncompleted', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('New task');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'Complete Me' } });
  fireEvent.click(button);

  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked(); 

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked(); 
});
