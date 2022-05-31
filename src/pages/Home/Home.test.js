import Home from './';
import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import { BrowserRouter } from 'react-router-dom';

describe('Home page integration tests', () => {
  const displayRendered = () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  test('Should render without crash', () => {
    displayRendered();
  });

  test('Should render title', () => {
    displayRendered();
    const title = screen.getByText(
      'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
    );
    expect(title).toBeTruthy();
  });

  test('Should render 2 links to do the test', () => {
    displayRendered();
    const links = screen.getAllByText('Faire le test');
    expect(links.length).toEqual(2);
  });

  test('Should render a svg image', () => {
    displayRendered();
    const svg = screen.getByText('home-illustration.svg');
    expect(svg).toBeTruthy();
  });

  test('Should render right img logo depending on the context', () => {
    displayRendered();
    const nightModeButton = screen.getByRole('button');
    const dark = 'dark-logo.png';
    const light = 'light-logo.png';
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', light);
    fireEvent.click(nightModeButton);
    expect(img).toHaveAttribute('src', dark);
  });
});
