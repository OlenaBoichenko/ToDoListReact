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