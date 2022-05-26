import Freelances from './';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import { BrowserRouter } from 'react-router-dom';

describe('Freelances page integration tests', () => {
  const displayRendered = () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Freelances />
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  test('Should render without crash', () => {
    displayRendered();
  });

  test('Should render title', () => {
    displayRendered();
    const title = screen.getByText('Trouvez votre prestataire');
    expect(title).toBeTruthy();
  });

  test('Should render slogan', () => {
    displayRendered();
    const slogan = screen.getByText(
      'Chez Shiny nous réunissons les meilleurs profils pour vous.'
    );
    expect(slogan).toBeTruthy();
  });
});
