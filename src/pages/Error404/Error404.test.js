import Error404 from './';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import { BrowserRouter } from 'react-router-dom';

describe('Error404 page integration tests', () => {
  const displayRendered = () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Error404 />
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  test('Should render without crash', () => {
    displayRendered();
  });

  test('Should render texts', () => {
    displayRendered();
    const text1 = screen.getByText('Oups...');
    const text2 = screen.getByText('Il semblerait qu’il y ait un problème');
    expect(text1).toBeTruthy();
    expect(text2).toBeTruthy();
  });

  test('Should render a svg image', () => {
    displayRendered();
    const svg = screen.getByText('404.svg');
    expect(svg).toBeTruthy();
  });
});
