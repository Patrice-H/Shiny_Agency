import { switchTitle, formatJobList, formatAnswersParams } from './';

describe('Title unit tests', () => {
  test('Should return the title of positive results', () => {
    const expectedTitle = 'Les compétences dont vous avez besoin :';
    expect(switchTitle(5)).toEqual(expectedTitle);
  });
  test('Should return the title of negative results', () => {
    const expectedTitle = 'Dommage...';
    expect(switchTitle(0)).toEqual(expectedTitle);
  });
  test('Should return a comma at the end of title', () => {
    const expectedFormat = 'my title,';
    expect(formatJobList('my title', 3, 1)).toEqual(expectedFormat);
  });
  test('Should not return a comma at the end of title', () => {
    const expectedFormat = 'my title';
    expect(formatJobList('my title', 3, 2)).toEqual(expectedFormat);
  });
});

describe('Format params unit tests', () => {
  test('Should return params in a string', () => {
    const data = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true };
    const expectedParams = 'a1=true&a2=true&a3=true&a4=true&a5=true&a6=true';
    expect(formatAnswersParams(data)).toEqual(expectedParams);
  });
  test('Should return an empty string', () => {
    const data = '';
    const expectedParams = '';
    expect(formatAnswersParams(data)).toEqual(expectedParams);
  });
});
