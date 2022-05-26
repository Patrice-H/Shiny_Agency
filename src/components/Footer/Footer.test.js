import Footer from './';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';

describe('Footer integration tests', () => {
  const displayRendered = () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
  };

  test('Should render without crash', () => {
    displayRendered();
  });

  test('Should change theme', () => {
    displayRendered();
    const nightModeButton = screen.getByRole('button');
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
    fireEvent.click(nightModeButton);
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
  });
});
