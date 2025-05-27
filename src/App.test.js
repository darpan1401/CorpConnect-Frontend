import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders application', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Update test to check for something that actually exists in the app
  const headerElement = screen.getByText(/CorpConnect/i);
  expect(headerElement).toBeInTheDocument();
});

