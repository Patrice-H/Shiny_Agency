import Card from './';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';

describe('Card integration tests', () => {
    const displayRendered = () => {
      render(
        <ThemeProvider>
          <Card label='label-test' picture='picture-test' title='title-test' />
        </ThemeProvider>
      );
    };

    test('Should render without crash', () => {
        displayRendered();
    });

    test('Should display label', () => {
        displayRendered();
        const labelText = screen.getByText('label-test');
        expect(labelText).toBeTruthy();
    });

    test('Img must have src="picture-test"', () => {
        displayRendered();
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'picture-test');
    });

    test('Should display title', () => {
        displayRendered();
        const titleText = screen.getByText('title-test');
        expect(titleText).toBeTruthy();
    });
});