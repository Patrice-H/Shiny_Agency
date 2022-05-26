import Survey from './';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import { SurveyProvider } from '../../utils/context';
import { BrowserRouter } from 'react-router-dom';

describe('Survey page integration tests', () => {
  const displayRendered = () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <SurveyProvider>
            <Survey />
          </SurveyProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  test('Should render without crash', () => {
    displayRendered();
  });

  test('Should render slogan', () => {
    displayRendered();
    const text = screen.getByText('Question n°');
    expect(text).toBeTruthy();
  });
});
