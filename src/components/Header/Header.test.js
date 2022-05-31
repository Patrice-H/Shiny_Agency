import Header from './';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import { BrowserRouter } from 'react-router-dom';

describe('Header integration tests', () => {
    const displayRendered = () => {
      render(
        <BrowserRouter>
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        </BrowserRouter>
      );
    };

    test('Should render without crash', () => {
        displayRendered();
    });

    test('Img must have src="light-logo.png"', () => {
        displayRendered();
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'light-logo.png');
    });

    test('Should display navbar texts', () => {
        displayRendered();
        const linkText1 = screen.getByText('Accueil');
        const linkText2 = screen.getByText('Profils');
        const linkText3 = screen.getByText('Faire le test');
        expect(linkText1).toBeTruthy();
        expect(linkText2).toBeTruthy();
        expect(linkText3).toBeTruthy();
    });
});